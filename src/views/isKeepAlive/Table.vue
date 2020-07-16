<template>
  <div class="isKeepAlive-table">

    <!-- <keep-alive> -->
    <el-input placeholder="请输入内容" v-model="input" clearable style="width: 500px; margin-right: 16px">
    </el-input>
    <!-- </keep-alive> -->

    <!-- <el-input placeholder="请输入内容" v-model="input1" clearable style="width: 500px; margin-right: 16px">
    </el-input> -->


    <el-button type="primary">查询</el-button>
    <div style="height: 20px"></div>
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({
          path: '/keepAliveDetail',
          query: {
            name: row.name
          }
        })
      },

      handleDelete(index, row) {
        console.log(index, row);
      },


      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        input: '',
        input1: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '111',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎222',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎333',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }

</script>

<style lang="less" scoped>
  .isKeepAlive-table {
    height: 100%;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

</style>
