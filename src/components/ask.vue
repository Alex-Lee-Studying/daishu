<template>
  <div>
    <div class="table_area">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="table-expand">
              <el-form-item label="详情">
                <span>详情{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="求带时间" prop="ask_time" align="center"></el-table-column>
        <el-table-column label="从哪里" prop="from" align="center"></el-table-column>
        <el-table-column label="送到哪里" prop="to" align="center"></el-table-column>
        <el-table-column label="物品类型" prop="type" align="center"></el-table-column>
        <el-table-column label="求带价格（元）" prop="price" align="center"></el-table-column>
        <el-table-column label="公斤数（kg）" prop="desc" align="center"></el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template>
            <el-button size="small" type="primary" plain>联系他</el-button>
            <el-button type="primary" size="small">帮带</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="up_page">
      <el-pagination background  layout="prev, pager, next"  :total="50"></el-pagination>
    </div>
  </div>
</template>
<script>
export default{
  data(){
      return {
    tableData: [{
      ask_time: '2020/01/01',
      from: '中国',
      to: '俄罗斯',
      id: '12987122',
      type: '日用品',
      price: '200',
      weight: '12',
      desc:'不带烟酒或其他',
        },
        {
      ask_time: '2020/01/01',
      from: '中国',
      to: '俄罗斯',
      id: '12987122',
      type: '日用品',
      price: '200',
      weight: '12',
      desc:'不带烟酒或其他',
        }],
      }
  }
}
</script>