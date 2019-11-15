<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <q-form @submit="submit">
          <q-input
            outlined
            v-model="itemText"
          >
            <template v-slot:after>
              <q-btn
                type="submit"
                color="red"
                label="Save"
                style="display: inline-block;"
              />
            </template>
          </q-input>
        </q-form>
      </div>

      <div class="col">
        <q-list
          bordered
          separator
          v-if="items"
        >
          <q-item
            clickable v-for="item in items"
            :key="item"
          >
            <q-item-section>
              {{ item }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageIndex',

  data() {
    return {
      itemText: '',
    };
  },
  computed: {
    ...mapGetters('todo', [
      'items',
    ]),
  },
  methods: {
    submit() {
      this.$store.dispatch('todo/addItem', this.itemText);

      // Clear item input for new item
      this.itemText = '';
    },
  },
};
</script>
