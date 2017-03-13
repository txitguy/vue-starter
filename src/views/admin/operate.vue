<template>
  <div class="view-adminUser-operate">
    <el-row>
      <el-col :span="16" :push="4">
        <el-form :model="form">
          <el-form-item label="用户名" >
            <el-input placeholder="请输入用户名" v-model="form.name" auto-complete="off" :disabled="!isAdd">
            </el-input>
          </el-form-item>
          <el-form-item label="密码" v-if="isAdd">
            <el-input placeholder="请输入密码" v-model="form.password" auto-complete="off">
            </el-input>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input placeholder="请输入真实姓名" v-model="form.realName" auto-complete="off" >
            </el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input placeholder="请输入手机号" v-model="form.phone" auto-complete="off">
            </el-input>
          </el-form-item>
          <el-form-item label="请选择角色" prop="role">
            <el-select class="form-control" v-model="roles" multiple placeholder="请选择">
              <el-option
                v-for="item in adminRoles"
                :label="item.name"
                :value="item.gid">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="btn-block" @click="handleSubmit" :loading="loading">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'
  export default {
    props: {
      type: String,
      callback: Function,
      form: Object,
      loading: Boolean
    },
    data () {
      return {
        roles: []
      }
    },
    computed: {
      ...mapGetters([
        'adminRoles'
      ]),
      isAdd () {
        return this.type === 'add'
      }
    },
    watch: {
      form (val) {
        this.roles = _.map(val.bRoles, 'gid')
      }
    },
    methods: {
      handleSubmit () {
        this.form.roleGids = this.roles.toString()
        this.callback()
      }
    }
  }
</script>

<style>
  .form-control{
    width: 100%
  }
</style>
