<script>
  import Attribution from "$lib/Attribution.svelte";
</script>

<svelte:head
  ><title>Frontend Mentor | Fylo data storage component</title>
</svelte:head>

<div
  class="flex flex-col place-items-center justify-center min-h-screen bg-main-400 lg:overflow-x-hidden"
>
  <main
    class="w-[375px] h-[667px] flex flex-col place-items-center place-content-center lg:w-[1440px] lg:flex-row"
  >
    <section
      class="bg-main-300 rounded-xl rounded-tr-[5rem] w-11/12 p-9 lg:w-auto lg:pr-32 lg:mr-7"
    >
      <img src="/images/logo.svg" alt="logo" />
      <div class="flex space-x-4 mt-9">
        <button class="bg-main-400 flex items-center p-3 rounded-lg">
          <img src="/images/icon-document.svg" alt="" />
        </button>
        <button class="bg-main-400 flex items-center p-3 rounded-lg">
          <img src="/images/icon-folder.svg" alt="" />
        </button>
        <button class="bg-main-400 flex items-center p-3 rounded-lg">
          <img src="/images/icon-upload.svg" alt="" />
        </button>
      </div>
    </section>

    <section
      class="bg-main-300 rounded-xl w-11/12 mt-4 p-9 flex flex-col items-center pb-10 lg:w-auto"
    >
      <p class="tracking-wide lg:self-start">
        You’ve used <span class="font-bold">815 GB</span> of your storage
      </p>

      <div class="w-full mt-3">
        <div class="rounded-full bg-main-400 bg-opacity-50 p-1 lg:w-[500px]">
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
        class="[ tooltip ] absolute whitespace-nowrap text-black bg-white rounded-lg font-bold p-4 text-4xl flex items-center mt-24 lg:-mt-20 lg:ml-[21.2rem]"
      >
        185 <span class="text-sm ml-2 text-gray-400 uppercase">GB Left</span>
      </h3>
    </section>
  </main>
  <Attribution class="mt-auto absolute bottom-0 mb-1" />
</div>

<style>
  main {
    font-size: 14px;
    @apply text-main-100;
    background: url(/images/bg-mobile.png);
  }

  @media (min-width: 1024px) {
    main {
      background-image: url(/images/bg-desktop.png);
      background-position: center 122%;
      background-repeat: no-repeat;
    }
    .tooltip:after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-top-color: white;
      top: 52px;
      right: 0px;
      transform: rotate(90deg);
    }
  }

  .progress {
    background: linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
  }
</style>
