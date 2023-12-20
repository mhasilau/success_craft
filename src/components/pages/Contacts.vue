<template>
  <h1 class="center">Contact Us</h1>
  <div class="contact-us">
    <el-form class="form" label-width="120px" @submit.prevent="sendData">
      <el-form-item>
        <label>First Name *</label>
        <el-input
            v-model="v$.form.fName.$model"
            input-style="'red'"
            placeholder="Enter Your First Name"
        />
        <div class="error">
          <small
              v-if="v$.form.fName.$error"
              class="error"
          >
            First name field has an error.
          </small>
        </div>
      </el-form-item>

      <el-form-item>
        <label>Last Name *</label>
        <el-input
            v-model="v$.form.lName.$model"
            placeholder="Enter Your Last Name"
        />
        <div class="error">
          <small
              v-if="v$.form.lName.$error"
              class="error"
          >
            Last name field has an error.
          </small>
        </div>
      </el-form-item>

      <el-form-item>
        <label>Company *</label>
        <el-input
            v-model="v$.form.company.$model"
            placeholder="Enter Your Company"
        />
        <div class="error">
          <small
              v-if="v$.form.company.$error"
              class="error"
          >
            Company field has an error.
          </small>
        </div>
      </el-form-item>

      <el-form-item>
        <label>Email *</label>
        <el-input
            v-model="v$.form.email.$model"
            placeholder="Enter Your Email"
        />
        <div class="error">
          <small
              v-if="v$.form.email.$error"
              class="error"
          >
            Email field has an error.\
          </small>
        </div>
      </el-form-item>

      <el-form-item>
        <label>Job Title *</label>
        <el-input
            v-model="v$.form.job.$model" placeholder="Enter Job Title"
        />
        <div class="error">
          <small v-if="v$.form.job.$error" class="error">Job field has an error.</small>
        </div>
      </el-form-item>

      <el-form-item>
        <label>Country *</label>
        <el-select
            v-model="v$.form.country.$model"
            filterable
            placeholder="Enter Your Country"
            remote
            remote-show-suffix
            reserve-keyword
        >
          <el-option
              v-for="item in countries"
              :key="item.name"
              :label="item.name"
              :value="item.name"
          />
        </el-select>
        <div class="error">
          <small v-if="v$.form.country.$error" class="error">Country field has an error.</small>
        </div>
      </el-form-item>

      <el-form-item>
        <label>State *</label>
        <el-input v-model="v$.form.state.$model" placeholder="Enter Your State"
        />
        <div class="error">
          <small v-if="v$.form.state.$error" class="error">State field has an error.</small>
        </div>
      </el-form-item>

      <el-form-item>
        <label>Zip code *</label>
        <el-input
            v-model.trim.number="v$.form.zipCode.$model"
            placeholder="Enter Your Zip Code"
        />
        <div class="error">
          <small v-if="v$.form.zipCode.$error" class="error">Zip code field has an error.</small>
        </div>
      </el-form-item>

    </el-form>

  </div>
  <ButtonComp :type="'primary'" class="center" @click="sendData">Submit</ButtonComp>
  <ModalForm v-if="showModal" @close="showAndCloseForm">
    <ModalContactUs :form="form"/>
  </ModalForm>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import {
  email,
  minLength,
  numeric,
  required,
} from '@vuelidate/validators';
// eslint-disable-next-line import/no-unresolved
import ButtonComp from '@/components/shared/Buttons.vue';
// eslint-disable-next-line import/no-unresolved
import ModalForm from '@/components/shared/ModalForm.vue';
// eslint-disable-next-line import/no-unresolved
import ModalContactUs from '@/components/shared/modal/ModalContactUs.vue';

// eslint-disable-next-line import/extensions,import/no-unresolved
import { countries } from '@/mock/contries';

export default {
  name: 'ContactPage',
  components: { ButtonComp, ModalForm, ModalContactUs },
  data() {
    return {
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
      countries,
      showModal: false,
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      form: {
        fName: {
          required,
          minLength: minLength(2),
        },
        lName: {
          required,
          minLength: minLength(2),
        },
        company: {
          required,
          minLength: minLength(2),
        },
        email: {
          required,
          email,
        },
        job: {
          required,
          minLength: minLength(2),
        },
        country: {
          required,
        },
        state: {
          required,
          minLength: minLength(2),
        },
        zipCode: {
          required,
          minLength: minLength(2),
          numeric,
        },
      },
    };
  },
  methods: {
    async sendData() {
      // const newForm = {
      //   fName: this.form.fName,
      //   lName: this.form.lName,
      //   company: this.form.company,
      //   email: this.form.email,
      //   job: this.form.job,
      //   country: this.form.country,
      //   state: this.form.state,
      //   zipCode: this.form.zipCode,
      // }
      //
      // this.postData(newForm) // TODO send form to server
      const result = await this.v$.$validate();
      if (!result) {
        this.v$.$touch();
        return;
      }

      this.showAndCloseForm(true);
    },
    showAndCloseForm(event) {
      this.showModal = !this.showModal;
      if (!event) {
        this.v$.$reset();
        this.form = {
          fName: '',
          lName: '',
          company: '',
          email: '',
          job: '',
          country: '',
          state: '',
          zipCode: '',
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
  margin-right: 20px;
  text-align: center;
}

// .el-form.el-form-item.el-form-item__content - инлайн стиль. перебить не могу (margin-left: 120px)

.contact-us {
  flex-direction: column;
  text-align: center
}

.el-select {
  width: 100%;
}

.error {
  height: 35px;
  color: red;
  width: 100%;
  text-align: start;

  small {
    all: revert;
  }
}

@media (max-width: 900px) {
  .contact-us {
    form {
      display: block;
    }
  }
}
</style>
