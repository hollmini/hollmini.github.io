<template>
  <div>
    <ul class="lst_wrap">
      <li v-for="item in listItems" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <!-- 타이틀 영역  -->
          <template v-if="item.domain">
            <a :href="item.url" class="tit" target="_blank">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`" class="tit">{{ item.title }}</router-link>
          </template>
          <!-- // 타이틀 영역 -->
          <small class="link_txt">
            {{item.time_ago}} by 
            <router-link v-if="item.user" :to="`/user/${item.user}`">{{item.user}}</router-link>
            <a v-else :href="item.domain">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if(name === 'news') {
        return this.$store.state.news;
      }else if(name === 'ask') {
        return this.$store.state.ask;
      }else if(name === 'jobs') {
        return this.$store.state.jobs;
      }
    }
  },
 }
</script>

<style scoped>
.lst_wrap {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
  border-bottom: 1px solid #eee;
  align-items: center;
  list-style: none;
}

.points {
  display: flex;
  width: 80px;
  height: 60px;
  justify-content: center;
  align-items: center;
  color: #42b883;
}

.tit {
  display: block;
  margin: 0;
}

.link_txt {
  color: #828282;
}
</style>
