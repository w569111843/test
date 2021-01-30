<template>
    <div class="service-agency">
        <Theme msg="评估服务机构" url="" />
        <div class="agency-details">
            <!-- <table>
                <tr>
                    <th class="t1">机构名称</th>
                    <th>编码</th>
                    <th class="t3">有效期</th>
                </tr>
                <tr v-for="n in 7" :key="">
                    <td class="t1">January</td>
                    <td>$100</td>
                    <td class="t3">hhh</td>
                </tr>
            </table> -->
            <el-table :data="tableData" stripe height="260">
                <el-table-column
                    prop="orgName"
                    label="机构名称"
                    show-overflow-tooltip
                    width="274"
                >
                </el-table-column>
                <el-table-column
                    prop="orgCode"
                    label="编码"
                    align="center"
                    show-overflow-tooltip
                    width="170"
                >
                </el-table-column>
                <el-table-column
                    prop="validTime"
                    label="有效期"
                    align="right"
                    show-overflow-tooltip
                    width="100"
                >
                    <template slot-scope="scope"
                        >{{ scope.row.validTime }}年</template
                    >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import Theme from "../theme/index";
export default {
    data() {
        return {
            tableData: [],
        };
    },
    mounted() {
        this.onLoad();
    },
    methods: {
        onLoad() {
            this.$axios
                .post("http://8.131.74.190:8080/grade-web/api/home/org/list")
                .then((response) => {
                    if (response.data.data.dataMap) {
                        var arr = response.data.data.dataMap;
                        this.tableData = arr;
                    }
                })
                .catch(function (error) {
                    // 请求失败处理
                    console.log(error);
                });
        },
    },

    components: {
        Theme,
    },
};
</script>

<style scoped>
/*评估机构信息展示样式*/
.service-agency .agency-details {
    width: calc(100% - 40px);
    height: 268px;
    background-color: #f9f9f9;
    border-radius: 6px;
    padding: 10px 20px;
}
</style>
<style>
.el-table td,
.el-table th.is-leaf {
    border-bottom: none !important;
}

.el-table--border::after,
.el-table--group::after,
.el-table::before {
    background: #f9f9f9;
}
.el-table {
    background: #f9f9f9;
}
.el-table th,
.el-table tr {
    background: #f9f9f9;
}

.el-table td,
.el-table th {
    padding: 7px 0;
}

.el-table {
    color: #6a6a6a;
}

.el-table thead {
    color: #6a6a6a;
}
</style>
