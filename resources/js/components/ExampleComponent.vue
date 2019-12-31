<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <v-container> 
            <v-col md="10" offset-md="1">
            <template>
                  <v-card 
                  shaped>
                    <v-card-title>
                      Data Users
                      <v-spacer></v-spacer>

                      <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                      ></v-text-field>
                    </v-card-title>
                  <v-card-actions>
                    <v-btn small color="primary" @click="handleClick">Test Mutation</v-btn>
                  </v-card-actions>
                    
                    <v-data-table
                      :headers="headers"
                      :items="users"
                      :search="search"
                    ></v-data-table>
                  </v-card>
            </template> 
        </v-col>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>    
    import gql from 'graphql-tag'
    export default {
        props: {
          source: String,
        },
        data(){
            return{

                users: [],
                posts: [],
                search: '',
                headers: [
                  {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                  },
                  { text: 'Email', value: 'email' },
                ],
                
                drawer: null,

            }
        },

        apollo: {
            users: gql`
            {
                users{
                    name
                    email
                }
            }`,
            posts: gql`
            {
                posts{
                    title
                    user{
                        name
                        email
                    }
                }
            }`,
        },
        methods:{
            handleClick(){
                console.log('berhasil')
            }
        }
    }
</script>
