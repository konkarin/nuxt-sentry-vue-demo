import * as Sentry from '@sentry/vue';

export default defineNuxtPlugin((nuxtApp) => {
  // 500エラーを引き起こさないようにする
  // nuxtApp.vueApp.config.errorHandler = (e) => {
  //   console.error(e);
  // };

  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  });
});
