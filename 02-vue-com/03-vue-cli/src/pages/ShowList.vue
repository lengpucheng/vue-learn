<template>
  <div class="table-responsive">
    <table id="listCustomer" class="table table-striped">
      <thead>
      <tr>
        <th>邀请码</th>
        <th>部门</th>
        <th>职务</th>
        <th>添加者</th>
        <th>添加时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody id="searchVar">
      <!-- 预留数据 -->
      <tr>
        <td>abc234</td>
        <td>主席团</td>
        <td>干事</td>
        <td>admin</td>
        <td>2021-03-16T18:36:53.077</td>
        <td><p><a href="/wtr/register/del/abc234">删除</a></p></td>
      </tr>
      <tr>
        <td>test</td>
        <td>摄制部</td>
        <td>干事</td>
        <td>妹传</td>
        <td>2021-03-27T17:37:39.264</td>
        <td><p><a href="/wtr/register/del/test">删除</a></p></td>
      </tr>
      <tr>
        <td>bzb</td>
        <td>播主部</td>
        <td>干事</td>
        <td>妹传</td>
        <td>2021-03-27T17:54:38.519</td>
        <td><p><a href="/wtr/register/del/bzb">删除</a></p></td>
      </tr>
      <tr>
        <td>bdb</td>
        <td>编导部</td>
        <td>干事</td>
        <td>妹传</td>
        <td>2021-03-27T17:55:45.114</td>
        <td><p><a href="/wtr/register/del/bdb">删除</a></p></td>
      </tr>
      <tr>
        <td>xmt</td>
        <td>新媒体</td>
        <td>干事</td>
        <td>靳传妹</td>
        <td>2021-03-28T21:00:05.113</td>
        <td><p><a href="/wtr/register/del/xmt">删除</a></p></td>
      </tr>
      <tr>
        <td>wtr001</td>
        <td>老干部</td>
        <td>测试</td>
        <td>鲁云浩</td>
        <td>2021-03-28T22:42:00.812</td>
        <td><p><a href="/wtr/register/del/wtr001">删除</a></p></td>
      </tr>
      </tbody>
      <tfoot>
      <!-- 尾部数据 -->
      <tr></tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "ShowList"
}
</script>

<style scoped>

</style>