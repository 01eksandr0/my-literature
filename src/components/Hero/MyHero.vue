<template>
  <section
    class="hero bg-cover bg-center w-screen h-80 md:h-[500px] xl:h-[700px] pt-[20px] md:pt-[50px]"
  >
    <my-container>
      <p
        class="text-white relative z-10 text-xl font-medium text-center xl:text-4xl"
      >
        «Я думаю, що з часом аудиторія для читання художньої літератури буде
        дуже малою, так само малою, як аудиторія для поезії. Книги не будуть
        відігравати таку важливу роль у культурі, як це було в минулому»
        <span class="font-bold">Філіп Рот</span>
      </p>
      <p
        class="text-white text-xl relative z-10 font-medium text-center hidden mt-[30px] md:block xl:text-4xl xl:mt-[80px]"
      >
        «Канон вмирає, тому що люди більше не читають. Вони отримують свою
        інформацію з електронних засобів масової інформації, які не потребують
        глибоких роздумів»
        <span class="font-bold">Гарольд Блум</span>
      </p>
      <p
        class="text-white text-xl relative z-10 font-medium text-center mt-[30px] hidden md:block xl:text-4xl xl:mt-[80px] xl:font-bold"
      >
        «Ми стали свідками поступового занепаду культури читання, і якщо цей
        тренд продовжиться, література як форма мистецтва може опинитися під
        загрозою»
        <span class="font-bold">Пол Остер</span>
      </p>
    </my-container>
  </section>
</template>

<script>
export default { name: "my-hero" };
</script>

<style lang="css" scoped>
.hero {
  background-image: url(../../assets/images/back-second.jpg);
  position: relative;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
