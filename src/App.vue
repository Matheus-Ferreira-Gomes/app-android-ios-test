<template>
  <v-app>
    <v-main class="pa-5">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Background-Mode</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="isBGActive"
            >Está ativo?</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none"
            >Ativar background mode</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Keep-Awake</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="isKAActive"
            >Está ativo?</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none"
              @click="KAEnable"
            >Ativar Keep Awake</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Clipboard</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="copyToClipboard"
            >Copiar</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Network</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="checkNetwork"
            >Checar internet</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Compartilhar</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="share"
            >Share</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Status Bar</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="SBOverlary"
            >Overlay</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="SBDark"
            >Dark</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="SBLight"
            >Light</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="SBHide"
            >Hide</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="SBShow"
            >Show</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="SBChangeColor"
            >Mudar cor</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Navigation Bar</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="NBHide"
            >Hide</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="NBShow"
            >Show</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="NBSetColor"
            >Mudar cor</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Suporte</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="sendEmail"
            >Mandar e-mail</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Fullscreen</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="activeFullscreen"
            >Ativar fullscreen</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="deactiveFullscreen"
            >Desativar fullscreen</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Orientação</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="portrait"
            >Portrait</v-btn>

            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="landscape"
            >Landscape</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Headset</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="headsetDetectation"
            >Detect</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>One Signal</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn
              color="primary"
              class="pa-5 text-none mr-3"
              @click="getOSID"
            >Get ID</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-main>
  </v-app>
</template>

<script>
import { BackgroundMode } from "@anuradev/capacitor-background-mode";
import { KeepAwake } from "@capacitor-community/keep-awake";
import { Clipboard } from "@capacitor/clipboard";
import { Network } from "@capacitor/network";
import { Share } from "@capacitor/share";
import { StatusBar, Style } from "@capacitor/status-bar";
import { NavigationBar } from "@hugotomazi/capacitor-navigation-bar";
import { ScreenOrientation } from "@capacitor/screen-orientation";
import { Device } from "@capacitor/device";
import OneSignal from "onesignal-cordova-plugin";

export default {
  name: "App",

  async mounted() {
    OneSignal.initialize("3b57f101-38d3-4f91-be7d-3923516f545f");

    const language = await Device.getLanguageCode();
    alert(`Idioma: ${language.value}`);

    Network.addListener("networkStatusChange", status => {
      alert(`Network status changed: ${status}`);
    });

    await ScreenOrientation.lock();
  },

  methods: {
    async isBGActive() {
      const active = await BackgroundMode.isActive();
      alert(`Ativo: ${active.activated}`);
    },
    async BGEnable() {
      await BackgroundMode.enable();
      alert("Ativado!");
    },

    async isKAActive() {
      const result = await KeepAwake.isKeptAwake();
      alert(`Ativo: ${result.isKeptAwake}`);
    },
    async KAEnable() {
      await KeepAwake.keepAwake();
      alert("Ativado!");
    },

    async copyToClipboard() {
      await Clipboard.write({
        string: "Hello World!"
      });
      alert("Copiado!");
    },

    async checkNetwork() {
      const status = await Network.getStatus();
      console.log("status:", status);
      alert(`Network status: conectado: ${status.connected} | connectionType: ${status.connectionType}`);
    },

    async share() {
      await Share.share({
        title: "See cool stuff",
        text: "Really awesome thing you need to see right meow",
        url: "http://ionicframework.com/",
        dialogTitle: "Share with buddies",
      })
    },

    async SBOverlary() {
      StatusBar.setOverlaysWebView({ overlay: true });
    },
    async SBDark() {
      await StatusBar.setStyle({ style: Style.Dark });
    },
    async SBLight() {
      await StatusBar.setStyle({ style: Style.Light });
    },
    async SBHide() {
      await StatusBar.hide();
    },
    async SBShow() {
      await StatusBar.show();
    },
    async SBChangeColor() {
      await StatusBar.setBackgroundColor({ color: "#FF0000" });
    },

    async NBHide() {
      await NavigationBar.hide();
    },
    async NBShow() {
      await NavigationBar.show();
    },
    async NBSetColor() {
      await NavigationBar.setColor({ color: "#FF0000" });
    },

    sendEmail() {
      window.open("mailto:matheusmgferreira2013@gmail.com", "_SYSTEM");
    },

    async activeFullscreen() {
      StatusBar.setOverlaysWebView({ overlay: true });
      await NavigationBar.hide();
      await StatusBar.hide();
    },
    async deactiveFullscreen() {
      StatusBar.setOverlaysWebView({ overlay: false });
      await NavigationBar.show();
      await StatusBar.show();
    },

    async portrait() {
      await ScreenOrientation.lock({ orientation: "portrait-primary" });
    },
    async landscape() {
      await ScreenOrientation.lock({ orientation: "landscape-primary" });
    },

    headsetDetectation() {
      window.HeadsetDetection.detect(detected => {
        alert(`Detect: ${detected}`);
      });
    },

    getOSID() {
      const oneSignalID = OneSignal?.User?.pushSubscription?.id;
      alert(`ID: ${oneSignalID}`);
    }
  }
};
</script>
