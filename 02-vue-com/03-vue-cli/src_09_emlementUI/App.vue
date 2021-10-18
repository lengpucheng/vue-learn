<template>
<div>
  <el-row>
    <lp-bt round>圆角按钮</lp-bt>
    <lp-bt type="primary" round>主要按钮</lp-bt>
    <lp-bt type="success" round>成功按钮</lp-bt>
    <lp-bt type="info" round>信息按钮</lp-bt>
    <lp-bt type="warning" round>警告按钮</lp-bt>
    <lp-bt type="danger" round>危险按钮</lp-bt>
  </el-row>

  <el-row>
    <lp-bt icon="el-icon-search" circle></lp-bt>
    <lp-bt type="primary" icon="el-icon-edit" circle></lp-bt>
    <lp-bt type="success" icon="el-icon-check" circle></lp-bt>
    <lp-bt type="info" icon="el-icon-message" circle></lp-bt>
    <lp-bt type="warning" icon="el-icon-star-off" circle></lp-bt>
    <lp-bt type="danger" icon="el-icon-delete" ></lp-bt>
  </el-row>

  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
    </el-date-picker>
  </div>
</div>
</template>

<script>

export default {
  name: "App",
}
</script>

<style scoped>

</style>