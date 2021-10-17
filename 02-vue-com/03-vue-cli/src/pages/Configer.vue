<template>
  <div class="container">
    <h1 class="page-header">添加数据</h1>
    <form id="goods" class="form-horizontal" role="form" action="/content/add" method="post">
      <div class="form-group">
        <label class="col-sm-2 control-label" for="platform">
          内容平台：
        </label>
        <div class="col-sm-10">
          <select class="bootstrap-select form-control" data-style="btn-info" id="platform" name="platform">
            <option value="未设置">默认选中:未设置</option>
            <option value="哔哩哔哩">哔哩哔哩</option>
            <option value="QQ空间">QQ空间</option>
            <option value="抖音">抖音</option>
            <option value="微信">微信</option>
            <option value="微博">微博</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="type">
          类型：
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="type" name="type" value="日常">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="style">
          风格：
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="style" name="style" value="未知">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="value">
          内容：
        </label>
        <div class="col-sm-10">
          <textarea class="form-control" rows="5" name="value" id="value"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="createTime">
          发表时间：
        </label>
        <div class="col-sm-10">
          <input type="datetime-local" class="form-control" id="createTime" name="setCreateTime"
                 value="2021-10-18T01:09:09.126"
          >
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="ulr">
          连接：
        </label>
        <div class="col-sm-10">
          <input type="url" class="form-control" id="ulr" name="ulr" value="#">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="view">
          阅读：
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="view" name="view"
                 value="0">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="transmit">
          转发：
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="transmit" name="transmit"
                 value="0">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="comment">
          评论：
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="comment" name="comment"
                 value="0">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="like">
          点赞：
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="like" name="like" value="0">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="coin">
          投币：
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="coin" name="coin" value="0">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="btn_submit">
        </label>
        <div class="col-sm-10">
          <p style="color: red">注意！职务至少是干事才有权添加！</p>
          <input type="submit" class="btn btn-lg btn-info btn-block" style="margin-top: 10px" id="btn_submit"
                 value="添加数据">
        </div>
      </div>

    </form>
  </div>

</template>

<script>
export default {
  name: "Configer"
}
</script>

<style scoped>

</style>