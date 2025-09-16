<script setup lang="ts">
import Alert from '../components/Alert.vue'
</script>

<template>
  <!-- Plain (no variant) -->
  <Alert title="Alert">
    <p>Alert with no option class selected.</p>
  </Alert>

  <!-- Success -->
  <Alert variant="success" title="Thank you!">
    <p>Thank you for submitting your details. If you have any questions please email
      <a href="mailto:#">example@st-andrews.ac.uk</a>.
    </p>
  </Alert>

  <!-- Info with h4 -->
  <Alert variant="info" title="Did you know?" headingTag="h4">
    <p>St Andrews was founded over 600 years ago. Learn more about the
      <a href="#">history of St Andrews</a>.
    </p>
  </Alert>

  <!-- Warning -->
  <Alert variant="warning" title="Warning!">
    <p>Deadline is end of Semester 2. For help, email <a href="mailto:#">example@st-andrews.ac.uk</a>.</p>
  </Alert>

  <!-- Danger, no heading -->
  <Alert variant="danger">
    <p>Danger! Lorem ipsum dolor sit amet…</p>
  </Alert>
</template>
