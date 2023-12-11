<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand" href="#">Stock trader</router-link>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link to="/portfolio" activeClass="active" tag="li" class="nav-item">
                <a class="nav-link">Portfolio</a>
              </router-link>
              <router-link to="/stocks" activeClass="active" tag="li" class="nav-item">
                <a class="nav-link">Stocks</a>
              </router-link>
            </ul>
            <ul class="navbar-nav navbar-right">
                <li class="nav-item"><a  class="nav-link" @click="EndDay">End Day</a></li>
                <li class=" dropdown" >
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Save and Load
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" @click="SaveData">Save data</a></li>
                      <li><a class="dropdown-item" @click="LoadData">Load data</a></li>
                    </ul>
                  </li>
                  <li class="nav-item d-flex justify-content-center align-items-center">
                    <strong>Funds : {{ funds | currency }}</strong>

                  </li>
              </ul>
          </div>
        </div>
      </nav>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods:{
    ...mapActions({
     randomizeStocks: 'randomizeStocks',
     fetchData: 'LoadData'
  }),

    EndDay(){
      this.randomizeStocks();
    },
    SaveData() {
      const data={
        funds: this.$store.getters.funds,
        stockPortfolio:this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };

      this.$http.put('data.json',data)
    },
    LoadData() {
      this.fetchData()

    }
  }

}
</script>