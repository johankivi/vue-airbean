<template>
  <main id="profile">
    <Navicon :type="'navicon'" />
    <ProfileForm v-if="!profile.name.length" />
    <section class="user" v-if="profile.name">
        <img src="@/assets/graphics/profile.svg" alt="profile icon" />
        <h2> {{ profile.name }}</h2>
        <p class="email">{{profile.email}}</p>
    </section>
    <section class="orderhistory" v-if="profile.orderHistory.length">
        <h2>Order history</h2>
    </section>
  </main>
</template>
<script>
import Navicon from '@/components/Navicon';
import ProfileForm from '@/components/ProfileForm';

export default {
  name: 'Profile',
  components: {
    Navicon,
    ProfileForm
  },
  computed: {
      profile(){
          return this.$store.state.profile;
      }
  }
}
</script>
<style lang="scss">
    @import './../assets/scss/variables';

    #profile {
        height: 100vh;
        background: $darkbrown;

        .user {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;

            h2 {
                margin: 1rem 0 0 0;
            }

            .email {
                margin: 0;
                color: rgba($color: #FFFFFF, $alpha: .8);
            }
        }

    }
</style>