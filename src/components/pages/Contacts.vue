<template>
  <h1 class="center">Contact Us</h1>
  <div class="contact-us">
    <el-form label-width="120px" class="form">
      <el-form-item>
        <label>First Name *</label>
        <el-input placeholder="Enter Your First Name" v-model="form.fName" />

      </el-form-item>
      <el-form-item>
        <label>Last Name *</label>
        <el-input placeholder="Enter Your Last Name" v-model="form.lName" />
      </el-form-item>
      <el-form-item>
        <label>Company *</label>
        <el-input placeholder="Enter Your Company" v-model="form.company" />
      </el-form-item>
      <el-form-item>
        <label>Email *</label>
        <el-input placeholder="Enter Your Email" v-model="form.email" />
      </el-form-item>
      <el-form-item>
        <label>Job Title *</label>
        <el-input placeholder="Enter Job Title" v-model="form.job" />
      </el-form-item>

      <el-form-item>
<!--          <label>Country</label>-->
<!--        <el-input placeholder="Enter Your Country" v-model="form.country" @input="filterCountry($event)"/>-->
<!--        <el-select :model-value="'Выберите страну'">-->
<!--          <el-option :value="c.name" :label="c.code3" :key="c.name" v-for="c in countries"/>-->
<!--        </el-select>-->

<!--        <div class="m-4">-->
<!--          <p>default</p>-->
                    <label>Country</label>
          <el-select
                      v-model="form.country"
                      filterable
                      remote
                      reserve-keyword
                      placeholder="Enter Your Country"
                      remote-show-suffix
          >
                      <el-option
                          v-for="item in countries"
                          :key="item.name"
                          :label="item.name"
                          :value="item.name"
                      />
          </el-select>
<!--        </div>-->

<!--        <el-select-->
<!--            v-model="form.country"-->
<!--            filterable-->
<!--            remote-->
<!--            reserve-keyword-->
<!--            placeholder="Enter Your Country"-->
<!--            remote-show-suffix-->
<!--        >-->
<!--          <el-option-->
<!--              v-for="item in countries"-->
<!--              :key="item.name"-->
<!--              :label="item.name"-->
<!--              :value="item.name"-->
<!--          />-->
<!--        </el-select>-->



      </el-form-item>
      <el-form-item>
        <label>State *</label>
        <el-input placeholder="Enter Your State" v-model="form.state" />
      </el-form-item>
      <el-form-item>
        <label>Zip code *</label>
        <el-input placeholder="Enter Your Zip Code" v-model="form.zipCode" />
      </el-form-item>

    </el-form>

  </div>
  <Button :type="'primary'" class="center" @click="sendData">Submit</Button>
  <ModalForm v-if="showModal" @close="showAndCloseForm">
    <ModalContactUs :form="form"/>
  </ModalForm>
</template>

<script>
import Button from '@/components/shared/Buttons.vue'
import ModalForm from '@/components/shared/ModalForm.vue'
import ModalContactUs from "@/components/shared/modal/ModalContactUs.vue";
// import useVuelidate from "@vuelidate/core";
import { required, numeric, email, url, helpers } from "@vuelidate/validators";

import {countries} from "@/mock/contries";

export default {
  name: 'ContactPage',
  components: { Button, ModalForm, ModalContactUs },
  data() {
    return {
      // v$: useVuelidate(),
      form: {
        fName: '',
        lName: '',
        company: '',
        email: '',
        job: '',
        country: '',
        state: '',
        zipCode: '',
      },
      countries: countries,
      showModal: false
    }
  },
  validations: {

    form: {
      fName: {
          required: helpers.withMessage("First name is required", required),
          $autoDirty: true,
        },
      lName: {
        required,
        $autoDirty: true
      },
      company: {
        required,
        $autoDirty: true
      },
      email: {
        required,
        $autoDirty: true,
        email
      },
      job: {
        required,
        $autoDirty: true
      },
      country: {
        required,
      },
      state: {
        required,
        $autoDirty: true
      },
      zipCode: {
        required,
        $autoDirty: true,
        numeric
      },
    }
  },
  methods: {
    sendData() {
      const newForm = {
        fName: this.form.fName,
        lName: this.form.lName,
        company: this.form.company,
        email: this.form.email,
        job: this.form.job,
        country: this.form.country,
        state: this.form.state,
        zipCode: this.form.zipCode,
      }

      console.log(newForm)
      this.showAndCloseForm()
    },
    showAndCloseForm() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped lang="scss">
.center {
  text-align: center;
}
.contact-us {
  display: flex;
  justify-content: center;
}
.form {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin-right: 120px;
  text-align: center;
}

.contact-us {
  flex-direction: column;
  text-align: center
}

.el-select {
  width: 100%;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
