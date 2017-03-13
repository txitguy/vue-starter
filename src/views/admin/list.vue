<template>
  <div class="view-adminUser-list">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <el-input v-model="pageOptions.keyword" placeholder="用户名/姓名/手机号"></el-input>
      </el-col>
      <el-col>
        <el-button-group>
          <el-button icon="search" @click="refresh"></el-button>
          <el-button @click="reset"><i class="fa fa-rotate-left"></i></el-button>
        </el-button-group>
      </el-col>
      <el-col :span="6" class="text-right">
        <el-button type="success" icon="plus" @click="routeAdd"></el-button>
        <el-button type="info" icon="edit" :disabled="!selectedRow" @click="routeEdit"></el-button>
        <el-button type="danger" icon="delete" :disabled="!selectedRow" @click="dialogVisible = true"></el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-table v-loading="tableLoading" :data="adminUsers" stripe highlight-current-row @current-change="handleCurrentChange">
          <el-table-column type="index" width="60"></el-table-column>
          <el-table-column prop="name" label="用户名"></el-table-column>
          <el-table-column prop="realName" label="姓名"></el-table-column>
          <el-table-column prop="roleNames" label="角色"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="createTime" label="创建时间"></el-table-column>
          <el-table-column prop="updateTime" label="修改时间"></el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-row type="flex" justify="end">
      <el-col :span="8" class="text-right">
        <el-pagination
          layout="total, prev, pager, next"
          @current-change="handlePageChange"
          :current-page="pageOptions.page"
          :total="pageOptions.total"
          >
        </el-pagination>
      </el-col>
    </el-row>

    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>确认删除用户 {{ selectedRow ? selectedRow.name : ''}} 吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleDelete">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  // import adminUser from 'services/adminUser'
  import util from 'utils/util'
  export default {
    data () {
      return {
        dialogVisible: false,
        tableLoading: false,
        selectedRow: null,
        pageOptions: {
          total: 0,
          page: 1,
          count: 10,
          keyword: ''
        },
        adminUsers: []
      }
    },
    methods: {
      refresh () {
        this.tableLoading = true
        // return adminUser.query(this.pageOptions).then(data => {
        //   this.adminUsers = data.list
        //   Object.assign(this.pageOptions, data.meta)
        //   this.tableLoading = false
        //   return data
        // })
      },
      reset () {
        util.emptyPageOptions(this.pageOptions)
        this.refresh()
      },
      routeAdd () {
        this.$router.push({name: 'adminUser.add'})
      },
      routeEdit () {
        this.$router.push({name: 'adminUser.edit', params: {id: this.selectedRow.gid}})
      },
      handleCurrentChange (row) {
        this.selectedRow = row || {}
      },
      handlePageChange (page) {
        this.pageOptions.page = page
        this.refresh()
      },
      handleDelete () {
        // let params = {
        //   gids: [this.selectedRow.gid]
        // }
        // return adminUser.destroy(params).then(data => {
        //   if (data.code === 200) {
        //     this.$notify.success('成功')
        //     this.dialogVisible = false
        //     this.refresh()
        //   }
        // })
      }
    },
    mounted () {
      this.refresh()
    }
  }
</script>
