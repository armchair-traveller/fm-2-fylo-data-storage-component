<script>
  import Attribution from "$lib/Attribution.svelte";
</script>

<svelte:head
  ><title>Frontend Mentor | Fylo data storage component</title>
</svelte:head>

<main
  class="w-[375px] h-[667px] flex flex-col place-items-center place-content-center"
>
  <section class="bg-main-300 rounded-xl rounded-tr-[5rem] w-11/12 p-9">
    <img src="/images/logo.svg" alt="logo" />
    <div class="flex space-x-4 mt-9">
      <div class="bg-main-400 flex items-center p-3 rounded-lg">
        <img src="/images/icon-document.svg" alt="" />
      </div>
      <div class="bg-main-400 flex items-center p-3 rounded-lg">
        <img src="/images/icon-folder.svg" alt="" />
      </div>
      <div class="bg-main-400 flex items-center p-3 rounded-lg">
        <img src="/images/icon-upload.svg" alt="" />
      </div>
    </div>
  </section>

  <section
    class="bg-main-300 rounded-xl w-11/12 mt-4 p-9 flex flex-col items-center pb-10"
  >
    <p class="tracking-wide">
      You’ve used <span class="font-bold">815 GB</span> of your storage
    </p>

    <div class="w-full mt-3">
      <div class="rounded-full bg-main-400 bg-opacity-50 p-1">
        <div
          class="[ progress ] w-[81.5%] rounded-full flex flex-row-reverse p-[2px]"
        >
          <div class="rounded-full bg-white h-[10px] w-[10px]" />
        </div>
      </div>
      <div class="flex justify-between mt-3">
        <p class="font-bold">0 GB</p>
        <p class="font-bold">1000 GB</p>
      </div>
    </div>
    <h3
      class="absolute whitespace-nowrap text-black bg-white rounded-lg font-bold p-4 text-4xl flex items-center mt-24"
    >
      185 <span class="text-sm ml-2 text-gray-400">GB Left</span>
    </h3>
  </section>
</main>

<!-- <img class="absolute" src="/images/bg-mobile.png" alt="" />
<img src="/images/bg-desktop.png" alt="" />

-->

<Attribution />

<style>
  main {
    font-size: 14px;
    @apply text-main-100;
  }

  @media (max-width: 800px) {
    main {
      background: url(/images/bg-mobile.png);
    }
  }

  .progress {
    background: linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
  }

  /* TODO
  Gradient: hsl(6, 100%, 80%) to hsl(335, 100%, 65%)

  Font
  - Weights: 400, 700 -- normal, bold

  - Mobile: 375px
- Desktop: 1440px
   */
</style>
