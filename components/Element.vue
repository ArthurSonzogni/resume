<script setup lang="ts">

import humanizeDuration from 'humanize-duration'

const props = defineProps<{
  company: string;
  location: string;
  logo: string;
  description: string;
  lang: string[];
  content: {
    title: string;
    endDate: Date;
    startDate: Date;
  }[];
}>()

</script>

<template>
  <div class="main">
    <div class="columns">
      <div class="column">
        <img :src="logo" class="logo" />
        <h3> {{ company }} </h3>
        <Icon name="uil:location-point" />
        {{ location }}
        ,
        {{ humanizeDuration(content[0].endDate - content[content.length - 1 ].startDate, { largest: 1 }) }}

        <div
          class="job_content"
          v-for="job in content" :key="job.startDate">

          <SubElement
            :title="job.title"
            :startDate="job.startDate"
            :endDate="job.endDate"
          />

        </div>
      </div>
      <div class="column">
        <div class="lang">
          <ul>
            <li v-for="l in lang" :key="l">
              <Icon name="bi:stars" v-if="l === 'Magic'" />
              {{ l }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <br/>
    <slot></slot>

  </div>
</template>


<style scoped>

.main {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}


h3 {
  display: inline;
  margin-right: 10px;
}

.logo {
  width: 64px;
  height: 64px;
  border-radius: 20%;
  margin-right: 10px;
  float: left;
  box-shadow:
  0 0 10px 10px rgba(255,255,255,0.05),
  0 4px 1px 1px rgba(0,0,0,0.1);
}

.main {
  clear: both;
}

.job_content {
  margin-left: 74px;
}

.job_title {
  font-weight: bold;
}

.job_dates {
  color: #777;
  font-size: 0.9em;
}

.lang {
  ul {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 0;

    padding:0;
    margin:0;
    text-align: right;
    list-style-type: none;
    justify-content: flex-end;

    li {
      color: white;
      font-weight: bold;
      font-size: 0.8rem;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 0.2rem 0.5rem;
      border-radius: 2rem;
      margin: 0.2rem;
    }

  }
}

.columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


</style>
