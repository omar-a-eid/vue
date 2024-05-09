<template>
  <user-form @addUser="addUser"></user-form>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="hidden sm:block">
      <div class="flex gap-6" aria-label="Tabs">
        <button
          @click="flag = 'UsersTable'"
          :class=" flag == 'UsersTable'?'bg-gray-300 text-gray-700': ''"
          class="shrink-0 rounded-lg p-5 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
        >
          User
        </button>
  
        <button
          @click="flag = 'AdminTable'"
          :class=" flag == 'AdminTable'?'bg-gray-300 text-gray-700': ''"
          class="shrink-0 rounded-lg p-5 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
        >
          Admin
        </button>
      </div>
    </div>
    
    <div class="mb-24">
      <component :is="flag" @deleteUser="deleteUser" :users="users" :admins="admins"/>
    </div>
  </div>
</template>

<script>
import UserForm from "../UserForm.vue";
import AdminTable from '../Slots/AdminTable.vue';
import UsersTable from '../Slots/UsersTable.vue';

  export default {
    data() {
     return { 
      id: 11,
      flag: "UsersTable",
      users: [
          {
            "id": 1,
            "name": "John Doe",
            "age": 30,
            "role": "user"
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "age": 25,
            "role": "user"
          },
          {
            "id": 3,
            "name": "Michael Johnson",
            "age": 40,
            "role": "user"
          },
          {
            "id": 4,
            "name": "Emily Brown",
            "age": 28,
            "role": "user"
          },
          {
            "id": 5,
            "name": "David Wilson",
            "age": 35,
            "role": "user"
          },
          {
            "id": 6,
            "name": "Sarah Taylor",
            "age": 32,
            "role": "user"
          },
          {
            "id": 7,
            "name": "Matthew Martinez",
            "age": 27,
            "role": "user"
          },
          {
            "id": 8,
            "name": "Jessica Anderson",
            "age": 29,
            "role": "user"
          },
          {
            "id": 9,
            "name": "Daniel Thompson",
            "age": 33,
            "role": "user"
          },
          {
            "id": 10,
            "name": "Ashley Harris",
            "age": 31,
            "role": "user"
          }
        ],
        admins: [
          {
            "id": 7,
            "name": "Matthew Martinez",
            "age": 27,
            "role": "admin"
          },
          {
            "id": 8,
            "name": "Jessica Anderson",
            "age": 29,
            "role": "admin"
          },
          {
            "id": 9,
            "name": "Daniel Thompson",
            "age": 33,
            "role": "admin"
          },
          {
            "id": 10,
            "name": "Ashley Harris",
            "age": 31,
            "role": "admin"
          },
          {
            "id": 3,
            "name": "Michael Johnson",
            "age": 40,
            "role": "admin"
          },
          {
            "id": 4,
            "name": "Emily Brown",
            "age": 28,
            "role": "admin"
          },
          {
            "id": 5,
            "name": "David Wilson",
            "age": 35,
            "role": "admin"
          },
          {
            "id": 6,
            "name": "Sarah Taylor",
            "age": 32,
            "role": "admin"
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "age": 25,
            "role": "admin"
          },
          {
            "id": 1,
            "name": "John Doe",
            "age": 30,
            "role": "admin"
          }
        ],}
    },
    components: {
      UserForm,
      UsersTable,
      AdminTable
    },
    methods: {
      deleteUser(id, role) {
        if(role == "user") {
          console.log(this.users);
          this.users = this.users.filter(u => u.id !== id);
        } else if(role == "admin") {
          this.users = this.users.filter(u => u.id !== id);
        }
      },
      addUser(name, age, role) {
        const newUser = {
            id: this.id++,
            name,
            age,
            role,
          }
        if(role == "admin") {
          this.admins.push(newUser)
        } else if (role == "user") {
          this.users.push(newUser)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>