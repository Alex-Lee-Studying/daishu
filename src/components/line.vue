<template>
  <div>
    <div class="table_area">
      <el-table :data="travels" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="table-expand">
              <el-form-item label="详情">
                <span>详情{{ props.row.details }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="出发时间" prop="dt_departure" align="center"></el-table-column>
        <el-table-column label="行程编号" prop="no" align="center"></el-table-column>
        <el-table-column label="航班" prop="flight_no" align="center"></el-table-column>
        <el-table-column label="出发国家" prop="departure" align="center"></el-table-column>
        <el-table-column label="到达国家" prop="destination" align="center"></el-table-column>
        <el-table-column label="可携带额" prop="weight" align="center"></el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template>
            <el-button size="small" type="primary" plain>联系他</el-button>
            <el-button type="primary" size="small">下单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="up_page">
      <el-pagination background layout="prev, pager, next" :total="travels.length" :current-page.sync="page" :page-size="pageSize" @size-change="$emit('getTravels')" @current-change="$emit('getTravels')"></el-pagination>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      page: 1,
      pageSize: 20
    }
  },
  computed: {
    travels() {
      return this.$store.state.travel.travels
    }
  }
}
</script>