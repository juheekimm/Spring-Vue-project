<template>
  <div>
    <!-- 나중에 삭제 바람 -->
    <br />
    <div>
      <table>
        <tr>
          <td>
            작성자 :
            <input type="text" disabled v-model="bulletin.uid" />
          </td>
          <td>
            제목 :
            <input type="text" v-model="bulletin.title" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text" v-model="bulletin.contents" id="contents" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="목록으로" @click="GoBoard()" />
            &nbsp;
            <input type="button" value="초기화" @click="clear()" />
          </td>
          <td>
            <input type="button" value="작성하기" @click="addBulletin()" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Constant from "../Constant";

export default {
  name: "addBulletin",
  computed: {
    id() {
      return this.$store.state.id;
    }
  },
  data() {
    return {
      bulletin: {
        bregdate: "",
        contents: "",
        goods: 0,
        hits: 0,
        sno: 2,
        title: "",
        uid: this.$store.state.id
      }
    };
  },
  methods: {
    addBulletin() {
      if (this.bulletin.title.trim() == "") alert("제목을 입력하세요!");
      else if (this.bulletin.uid.trim() == "") alert("작성자를 입력하세요!");
      else if (this.bulletin.contents.trim() == "") alert("내용을 입력하세요!");
      else {
        this.$store.dispatch(Constant.ADD_BULLETIN, {
          bulletin: this.bulletin
        });
        this.$router.push("/");
      }
    },
    clear() {
      this.bulletin.contents = "";
      this.bulletin.title = "";
      this.bulletin.uid = "";
    },
    GoBoard() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
table {
  margin: auto;
  width: 90%;
  border-top: 3px solid #696969;
  border-collapse: collapse;
}
td {
  border-bottom: 1px solid #444444;
  padding: 10px;
}
th {
  border-top: 50px;
  border-bottom: 3px solid #707070;
  padding: 10px;
  background: #c6f5fd;
}
#contents {
  width: 95%;
  height: 200px;
}
</style>
