const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList");

const Random = Mock.Random;

module.exports = [
  {
    // 获取单个问卷信息
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
      };
    },
  },
  {
    // 创建问卷
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // 获取（查询）问卷列表
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "" } = ctx;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;
      return {
        errno: 0,
        data: {
          list: getQuestionList({ isDeleted, isStar }), // 当前页
          total: 100, // 总数，用于分页
        },
      };
    },
  },
];
