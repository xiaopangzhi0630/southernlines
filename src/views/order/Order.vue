<template>
  <div class="order">

    <el-form ref="sizeForm" :model="sizeForm" label-width="80px" size="mini">

      <el-form-item label="活动名称" hide-required-asterisk=true prop="name" :rules="[{
          required: true
        }]">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>

        <el-col :span="11">

          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="sizeForm.resource" size="medium">
          <el-radio border label="线上品牌商赞助"></el-radio>
          <el-radio border label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="handleCreate">立即创建</el-button>
        <el-button @click="handleRestet('sizeForm')">取消</el-button>
      </el-form-item>
    </el-form>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: 'shanghai',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },

    methods: {
      onSubmit() {
        console.log('submit!');
      },

      handleCreate() {
        console.log(12312);
        this.$router.push({
          path: '/orderList'
        })
      },

      handleRestet(formName) {
        //  this.sizeForm = {}
        // this.$refs[form].resetFields();
        // console.log(this.$refs.form11)
        // this.$refs.form11.resetFields()
        console.log(this.$refs[formName])

        this.$refs[formName].resetFields();

      }
    }
  }

</script>

<style lang="less" scoped>
  .order {
    height: 100%;
    background: #fff;
    //  overflow: hidden;
  }

  .el-form {
    width: 500px;
    margin: auto;
    // margin-top: 50px;
    padding-top: 50px;

  }

</style>
