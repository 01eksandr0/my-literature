<template>
  <div>
    <button @click="requestNotificationPermission">
      Запросить разрешение на уведомления
    </button>
    <button @click="sendNotification">Отправить уведомление</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const notificationSupported = ref(false);
const notificationPermission = ref("default");

const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    alert("Этот браузер не поддерживает уведомления.");
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    notificationPermission.value = permission;
    if (permission === "granted") {
      notificationSupported.value = true;
      alert("Разрешение на уведомления предоставлено.");
    } else {
      alert("Разрешение на уведомления не предоставлено.");
    }
  } catch (error) {
    console.error("Ошибка при запросе разрешения на уведомления:", error);
  }
};

const sendNotification = () => {
  if (notificationSupported.value) {
    new Notification("Уведомление", {
      body: "Это тестовое уведомление.",
      icon: "/path/to/icon.png", // Замените на путь к вашему иконке
    });
  } else {
    alert("Нет разрешения на отправку уведомлений.");
  }
};
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}
</style>
