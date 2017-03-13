<template>
  <div class="view-adminUser-create">
    <operate type="add" :form="form" :callback="handleSubmit" :loading="btnLoading"></operate>
  </div>
</template>

<script>
  import adminUser from 'services/adminUser'
  import operate from './operate'
  export default {
    data () {
      return {
        btnLoading: false,
        form: {
        }
      }
    },
    components: {
      operate
    },
    methods: {
      handleSubmit () {
        this.btnLoading = true
        // adminUser.create(this.form).then(data => {
        //   if (data.code === 200) {
        //     this.$notify.success('成功')
        //     this.$router.push({name: 'adminUser.list'})
        //   }
        //   this.btnLoading = false
        // })
      }
    }
  }
</script>
