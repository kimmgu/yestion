import { defineStore } from 'pinia'
// import router from '~/routes'

export const useWorkspaceStore = defineStore('workspace', {
  state() {
    return {
      workspace: {},
      workspaces: [],
      workspacesLoaded: false,
      currentWorkspacePath: []
    }
  },
  getters: {

  },
  actions: {
    // C
    async createWorkspace(payload = {}) {
      const { parentId } = payload
      // fetch('url', options)
      const workspace = await request({
        method: 'POST',
        body: {
          parentId,
          title: ''
        }
      })
      this.readWorkspaces()
      // router.push(`/workspaces/${workspace.id}`)
      window.location.href = `/workspaces/${workspace.id}`
    },
    // R
    async readWorkspaces() {
      const worksapces = await request({
        method: 'GET'
      })
      this.workspaces = worksapces
      this.workspacesLoaded = true

      if(!this.workspaces.length) {
        this.createWorkspace()
      }
    },
    async readWorkspace(id) {
      const workspace = await request({
        method: 'GET',
        id
      })
      this.workspace = workspace
    },
    // U
    async updateWorkspace(payload) {
      const { id, title, content, poster } = payload
      const updatedWorkspace = await request({
        id,
        method: 'PUT',
        body: {
          title,
          content,
          poster
        }
      })
      this.workspace = updatedWorkspace

      this.readWorkspaces()
    },
    // D
    async deleteWorkspace(id) {
      await request({
        id,
        method: 'DELETE'
      })
      this.readWorkspaces()
    },
    findWorkspacePath(currentWorkspaceId) {
      const find = (workspace, parents) => {
        if(currentWorkspaceId === workspace.id) {
          this.currentWorkspacePath = [...parents, workspace]
        }
        if(workspace.children) {
          workspace.children.forEach(ws => {
            find(ws, [...parents, workspace])
          })
        }
      }
      this.workspaces.forEach(workspace => {
        find(workspace, [])
      })
    }
  }
})

async function request(options) {
  const { id = '', method, body } = options
  const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
    method,
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202204',
      'username': 'KimMingu'
    },
    body: JSON.stringify(body)
  })
  // await res.json() => 123
  // res.json() => promise instance 
  return res.json()
}
