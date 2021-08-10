<!--
 * @Author: kingford
 * @Date: 2021-08-10 15:10:21
 * @LastEditTime: 2021-08-10 19:15:57
-->
<template>
  <div>
    <el-button class="btn-print" @click="printContain">打印</el-button>
    <div id="print" class="print">
      <div class="title" style="text-align: center"> 车辆检修单 </div>
    </div>
    <iframe id="printf" src="" width="0" height="0" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';

export default defineComponent({
  setup() {
    const printContain = () => {
      setTimeout(function () {
        nextTick(() => {
          let prindId = document.getElementById('print');
          let newContent = prindId?.innerHTML;
          newContent =
            newContent +
            `<style>
              @page {
                size: auto;
                margin: 0;
              }
            </style>`;
          const f = document.getElementById('printf') as any;
          f.contentDocument.write(newContent);
          f.contentDocument.close();
          f.contentWindow.print();
        });
        // nextTick(() => {
        //   window.print();
        // });
      }, 500);
    };
    return {
      printContain,
    };
  },
});
</script>

<style lang="scss">
@media print {
  @page {
    size: auto;
    margin: 0;
  }

  .print {
    color: blue;
    text-align: center;
  }

  .layout-menu,
  .nav,
  .btn-print,
  .footer {
    display: none;
  }

  .print:last-child {
    page-break-after: auto;
  }
}
</style>
