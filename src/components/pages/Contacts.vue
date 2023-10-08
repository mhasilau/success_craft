<template>
  <h1 class="center">Contact Us</h1>
  <div class="contact-us">
    <el-form label-width="120px" class="form" ref="form">
      <el-form-item class="q">
        <label>First Name *</label>
        <el-input placeholder="Enter Your First Name" v-model="form.fName" />
      </el-form-item>
      <el-form-item required class="q">
        <label>Last Name *</label>
        <el-input placeholder="Enter Your Last Name" v-model="form.lName" />
      </el-form-item>
      <el-form-item required class="q">
        <label>Company *</label>
        <el-input placeholder="Enter Your Company" v-model="form.company" />
      </el-form-item>
      <el-form-item required class="q">
        <label>Email *</label>
        <el-input placeholder="Enter Your Email" v-model="form.email" />
      </el-form-item>
      <el-form-item required class="q">
        <label>Job Title *</label>
        <el-input placeholder="Enter Job Title" v-model="form.job" />
      </el-form-item>
      <el-form-item required class="q">
        <label>Country</label>
<!--        <el-input placeholder="Enter Your Country" v-model="form.country" @input="filterCountry($event)"/>-->
<!--        <el-select :model-value="'Выберите страну'">-->
<!--          <el-option :value="c.name" :label="c.code3" :key="c.name" v-for="c in countries"/>-->
<!--        </el-select>-->

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



      </el-form-item>
      <el-form-item required class="q">
        <label>State *</label>
        <el-input placeholder="Enter Your State" v-model="form.state" />
      </el-form-item>
      <el-form-item required class="q">
        <label>Zip code *</label>
        <el-input placeholder="Enter Your Zip Code" v-model="form.zipCode" />
      </el-form-item>
      <Button :type="'primary'" class="center">Submit</Button>

    </el-form>
  </div>
</template>

<script>
import Button from '@/components/shared/Buttons.vue'
import {countries} from "@/mock/contries";

export default {
  name: 'ContactPage',
  components: { Button },
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
      countries: countries
    }
  },
  methods: {
    a(e) {
      console.log(e)
    }
  },
  computed: {
    filterCountry(e) {
      return this.countries.forEach( c => c.name.includes(e))
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
}
</style>
