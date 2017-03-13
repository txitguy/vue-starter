<template>
  <div class="view-adminUser-edit" v-loading="infoLoading">
    <operate type="edit" :form="form" :callback="handleSubmit" :loading="btnLoading"></operate>
  </div>
</template>

<script>
  // import adminUser from 'services/adminUser'
  import operate from './operate'
  export default {
    data () {
      return {
        infoLoading: false,
        btnLoading: false,
        form: {
          role: null
        }
      }
    },
    components: {
      operate
    },
    methods: {
      handleSubmit () {
        this.btnLoading = true
        // adminUser.update(this.$route.params, this.form).then(data => {
        //   if (data.code === 200) {
        //     this.$notify.success('成功')
        //     this.$router.push({name: 'adminUser.list'})
        //   }
        //   this.btnLoading = false
        // })
      }
    },
    mounted () {
      this.infoLoading = true
      // adminUser.get(this.$route.params).then(data => {
      //   this.form = data
      //   this.infoLoading = false
      // })
    }
  }
</script>
