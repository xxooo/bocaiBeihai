<template>
  <div>
    <audio ref="audio" 
    @pause="onPause"
    @play="onPlay" src="./static/img/winning.wav" controls="controls" v-show="false"></audio>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	audio: {
        // 该字段是音频是否处于播放状态的属性
        playing: false
      }
    }
  },
  mounted() {
    bus.$on('kaijianglaaa', (data) => {
        this.startPlayOrPause();
    });
  },
  methods: {
    // 控制音频的播放与暂停
    startPlayOrPause () {
      return this.audio.playing ? this.pause() : this.play()
    },
    // 播放音频
    play () {
      this.$refs.audio.play()
    },
    // 暂停音频
    pause () {
      this.$refs.audio.pause()
    },
    // 当音频播放
    onPlay () {
      this.audio.playing = true
    },
    // 当音频暂停
    onPause () {
      this.audio.playing = false
    }
  },
  filters: {
    // 使用组件过滤器来动态改变按钮的显示
    transPlayPause(value) {
      return value ? '暂停' : '播放'
    }
  }
}
</script>

<style>

</style>