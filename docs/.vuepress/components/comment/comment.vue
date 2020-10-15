<template>
  <Vssue
    :title="$frontmatter.title"
    :options="options"
  />
</template>

<script>
import { VssueComponent } from 'vssue'
import GithubV4 from '@vssue/api-github-v4'
import 'vssue/dist/vssue.css'

export default {
  name: 'comment',

  components: {
    'Vssue': VssueComponent,
  },

  data () {
    return {
      options: {
        api: GithubV4,
        owner: 'TohckyToki',
        repo: 'TohckyToki.github.io',
        clientId: '75b92e7b2532bf0770d1',
        clientSecret: '6e3e2e8bb9d0bc09b082e95a699554dc14353c88',
        locale: 'zh',
      },
    }
  },
}
</script>