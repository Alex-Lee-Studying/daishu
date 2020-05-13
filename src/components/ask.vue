<template>
  <div>
    <div class="table_area">
      <el-table :data="deliveries" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="table-expand">
              <el-form-item label="详情">
                <span>详情{{ props.row.details }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="求带时间" prop="" align="center"></el-table-column>
        <el-table-column label="从哪里" prop="departure" align="center"></el-table-column>
        <el-table-column label="送到哪里" prop="destination" align="center"></el-table-column>
        <el-table-column label="物品类型" prop="item_type" align="center"></el-table-column>
        <el-table-column label="求带价格（元）" prop="reward" align="center"></el-table-column>
        <el-table-column label="公斤数（kg）" prop="weight" align="center"></el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template>
            <el-button size="small" type="primary" plain>联系他</el-button>
            <el-button type="primary" size="small">帮带</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="up_page">
      <el-pagination background layout="prev, pager, next" :total="deliveries.length" :current-page.sync="page" :page-size="pageSize" @size-change="$emit('getDeliveries')" @current-change="$emit('getDeliveries')"></el-pagination>
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
    deliveries() {
      return this.$store.state.delivery.deliveries
    }
  }
}
</script>