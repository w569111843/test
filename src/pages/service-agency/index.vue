<style scoped>
.agency {
    padding: 0 128px;
    overflow: hidden;
}
.agency-table {
    margin-top: 20px;
}
.conditions {
    margin-top: 20px;
    overflow: hidden;
}
.conditions-list {
    float: left;
    line-height: 40px;
    color: #000;
}
.agency-page {
    text-align: right;
    margin: 20px 0;
}
</style>
<template>
    <div>
        <el-breadcrumb
            separator-class="el-icon-arrow-right"
            style="padding-left: 128px"
        >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>评估服务机构</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="agency">
            <div class="conditions">
                <div class="conditions-list">
                    查询类型
                    <el-select
                        v-model="selectType"
                        placeholder="请选择评测机构"
                        style="margin-left: 5px; width: 213px"
                    >
                        <el-option
                            v-for="item in selectTypeList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="conditions-list" style="margin-left: 16px">
                    机构名称
                    <el-select
                        v-model="selectType"
                        placeholder="请选择机构名称"
                        style="margin-left: 5px; width: 213px"
                    >
                        <el-option
                            v-for="item in selectTypeList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="conditions-list" style="margin-left: 16px">
                    机构编码
                    <el-input
                        v-model="input"
                        placeholder="请输入内容"
                        style="margin-left: 5px; width: 213px"
                    ></el-input>
                </div>
                <div class="conditions-list" style="float: right">
                    <el-button type="primary" style="width: 120px"
                        >查询</el-button
                    >
                </div>
            </div>
            <div class="agency-table">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="orgName" label="机构名称" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="orgCode" label="机构编码" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="enterprisePerson"
                        label="企业法人"
                        width="150"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="industry"
                        label="所属行业"
                        width="300"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                        prop="qualificationTime"
                        label="资质获得时间"
                        width="150"
                    >
                        <template slot-scope="scope">{{
                            moment(scope.row.qualificationTime).format(
                                "YYYY-MM-DD"
                            )
                        }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="validTime"
                        label="有效期"
                        width="100"
                    >
                        <template slot-scope="scope"
                            >{{ scope.row.validTime }}年</template
                        >
                    </el-table-column>
                </el-table>
                <div class="agency-page">
                    <el-pagination
                        style="display: inline-block"
                        background
                        layout="prev, pager, next"
                        :total="totalNumber"
                        :page-size="10"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment";
export default {
    data() {
        return {
            moment,
            tableData: [],
            totalNumber: 0,
            selectType: "",
            input:"",
            selectTypeList: [],
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
                        this.totalNumber = parseInt(
                            response.data.data.totalRecords
                        );
                    }
                })
                .catch(function (error) {
                    // 请求失败处理
                    console.log(error);
                });
        },
    },
    components: {},
};
</script>

