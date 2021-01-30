
<template>
    <Table :columns="columns1" :data="data1" ></Table>
</template>
<script>
export default {
  name: 'QualificationOrgList',
  components: {

  },
  data () {
    return {
      columns1: [
        {
          title: '序号',
          key: 'number',
          width: '70%'
        },
        {
          title: '机构名称',
          key: 'name',
          className: 'tabel-name',
          // width: '90%'
        },
        {
          title: '机构编码',
          key: 'code',
          className: 'tabel-code'
        },
        {
          title: '企业法人',
          key: 'legal',
          className: 'tabel-legal',
          width: '100%'
        },
        {
          title: '企业性质',
          key: 'enterprise',
          className: 'tabel-enterprise'
        },
        {
          title: '所属行业',
          key: 'industry',
          className: 'tabel-industry'
        },
        {
          title: '资质获得时间',
          key: 'acquisitionTime',
          className: 'tabel-acquisitionTime',
          width: '130%'
        },
        {
          title: '有效期',
          key: 'term',
          className: 'tabel-term',
          width: '85%'
        }
      ],
      data1: [
        {
          number: '1',
          name: '中国信息通信研究院',
          code: 'AII-PGPC-A-001',
          legal: '刘多',
          enterprise: '国企/事业单位',
          industry: '科学研究和技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '2',
          name: '西安热工研究院有限公司',
          code: 'AII-PGPC-A-003',
          legal: '刘伟',
          enterprise: '国企/事业单位',
          industry: '电力、热力、燃气及水生产和供应业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '3',
          name: '中国航天系统科学与工程研究院',
          code: 'AII-PGPC-A-004',
          legal: '薛惠锋',
          enterprise: '国企/事业单位',
          industry: '科学研究和技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '4',
          name: '中国大唐集团科学技术研究院有限',
          code: 'AII-PGPC-A-011',
          legal: '高智溥',
          enterprise: '国企/事业单位',
          industry: '科学研究和技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '5',
          name: '中国铁道科学研究院集团有限公司',
          code: 'AII-PGPC-A-012',
          legal: '史天运',
          enterprise: '民营企业',
          industry: '信息传输、软件和信息技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '6',
          name: '中国船舶工业综合技术经济研究院',
          code: 'AII-PGPC-A-013',
          legal: '王岩',
          enterprise: '国企/事业单位',
          industry: '科学研究和技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '7',
          name: '中铁成都科学技术研究院有限公司',
          code: 'AII-PGPC-A-016',
          legal: '徐敦美',
          enterprise: '国企/事业单位',
          industry: '科学研究和技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '8',
          name: '上海华东电信研究院',
          code: 'AII-PGPC-A-017',
          legal: '郑忠斌',
          enterprise: '国企/事业单位',
          industry: '科学研究和技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '9',
          name: '湖南省电子信息产业研究院',
          code: 'AII-PGPC-A-020',
          legal: '廖国平',
          enterprise: '国企/事业单位',
          industry: '科学研究和技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        },
        {
          number: '10',
          name: '山东省电子信息产品检验院',
          code: 'AII-PGPC-A-022',
          legal: '王峰',
          enterprise: '国企/事业单位',
          industry: '科信息传输、软件和信息技术服务业',
          acquisitionTime: '2019-02-21',
          term: '3年'
        }
      ]
    };
  }
};
</script>
<style>
  .ivu-table td.tabel-name{
    /* background-color: #ff6600; */
    color: #2E8DE6  !important;

}
.ivu-table td.tabel-name span ,.ivu-table td.tabel-industry  span{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
}
</style>
