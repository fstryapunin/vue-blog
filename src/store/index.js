import { createStore } from 'vuex'

const initialPosts = [
  {
    id: 1,
    title: 'Answered: Your Most Burning Questions About FLORIDA MAN',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus, libero vitae iaculis tempus, ante purus rhoncus neque, eget fringilla mauris neque quis massa. Pellentesque a vehicula nunc, non pulvinar ex. Nam sit amet mi non elit facilisis molestie sed et nisl. Pellentesque egestas in urna sed consectetur. Fusce tortor nibh, blandit vel magna gravida, sagittis ornare velit. Nunc tristique, est vitae dignissim accumsan, leo erat semper sem, in interdum magna eros quis mi. Duis vitae lacus neque. Aliquam condimentum vestibulum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in consequat enim.
              Sed vitae nisi et odio sollicitudin hendrerit. Donec eget mi eleifend, tincidunt sapien ac, consectetur metus. Duis et congue metus. Vestibulum hendrerit ac libero ut mattis. Suspendisse ac risus euismod, sodales libero sed, laoreet libero. In vitae justo sit amet ante eleifend ornare ac a nisi. Praesent vulputate tristique ante vitae viverra. Quisque purus mi, tempor vel est id, tincidunt tincidunt leo. Quisque lobortis, erat vitae accumsan interdum, ligula diam pellentesque arcu, sed lacinia ante urna ac neque. Vivamus commodo arcu turpis, id porta nisi sodales id. Fusce efficitur volutpat commodo.`,
              
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta in risus sit amet rhoncus. Proin est nisi, congue sed justo sit amet, pharetra efficitur lectus. Vivamus sit amet tellus dolor. Donec mollis augue ut massa tempus, sed dictum tellus ultricies. In sagittis, risus nec condimentum hendrerit, dui quam consequat dui, et volutpat nisi quam at lectus. Aenean felis sem, gravida at suscipit in, vehicula eget enim. Donec dictum neque eu luctus fringilla. Nam suscipit enim suscipit felis fermentum gravida. Mauris tincidunt id augue in hendrerit. In auctor, ex finibus eleifend interdum, ipsum lacus scelerisque mi, eget blandit libero lacus viverra enim. Sed consequat cursus velit, in vehicula urna aliquet quis. Pellentesque at felis pharetra, varius nisi sit amet, consequat sem.'
  },
  {
    id: 2,
    title: 'The Ultimate Guide To FLORIDA MAN',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus, libero vitae iaculis tempus, ante purus rhoncus neque, eget fringilla mauris neque quis massa. Pellentesque a vehicula nunc, non pulvinar ex. Nam sit amet mi non elit facilisis molestie sed et nisl. Pellentesque egestas in urna sed consectetur. Fusce tortor nibh, blandit vel magna gravida, sagittis ornare velit. Nunc tristique, est vitae dignissim accumsan, leo erat semper sem, in interdum magna eros quis mi. Duis vitae lacus neque. Aliquam condimentum vestibulum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in consequat enim.
              Sed vitae nisi et odio sollicitudin hendrerit. Donec eget mi eleifend, tincidunt sapien ac, consectetur metus. Duis et congue metus. Vestibulum hendrerit ac libero ut mattis. Suspendisse ac risus euismod, sodales libero sed, laoreet libero. In vitae justo sit amet ante eleifend ornare ac a nisi. Praesent vulputate tristique ante vitae viverra. Quisque purus mi, tempor vel est id, tincidunt tincidunt leo. Quisque lobortis, erat vitae accumsan interdum, ligula diam pellentesque arcu, sed lacinia ante urna ac neque. Vivamus commodo arcu turpis, id porta nisi sodales id. Fusce efficitur volutpat commodo.`,
              
    preview: 'Nulla vulputate mollis lacus, vel tristique est laoreet id. Mauris at justo non nibh sagittis commodo ut ut est. Nullam augue ex, varius non mi eu, maximus accumsan ipsum. Praesent elementum velit eget ex iaculis gravida. Nam at aliquam lorem, non fringilla lacus. Vivamus rhoncus elementum augue, et vulputate lectus condimentum sit amet. Etiam et nisi tempus, commodo dolor in, pellentesque dui.'
  },
  {
    id: 3,
    title: 'Why FLORIDA MAN Succeeds',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus, libero vitae iaculis tempus, ante purus rhoncus neque, eget fringilla mauris neque quis massa. Pellentesque a vehicula nunc, non pulvinar ex. Nam sit amet mi non elit facilisis molestie sed et nisl. Pellentesque egestas in urna sed consectetur. Fusce tortor nibh, blandit vel magna gravida, sagittis ornare velit. Nunc tristique, est vitae dignissim accumsan, leo erat semper sem, in interdum magna eros quis mi. Duis vitae lacus neque. Aliquam condimentum vestibulum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in consequat enim.
              Sed vitae nisi et odio sollicitudin hendrerit. Donec eget mi eleifend, tincidunt sapien ac, consectetur metus. Duis et congue metus. Vestibulum hendrerit ac libero ut mattis. Suspendisse ac risus euismod, sodales libero sed, laoreet libero. In vitae justo sit amet ante eleifend ornare ac a nisi. Praesent vulputate tristique ante vitae viverra. Quisque purus mi, tempor vel est id, tincidunt tincidunt leo. Quisque lobortis, erat vitae accumsan interdum, ligula diam pellentesque arcu, sed lacinia ante urna ac neque. Vivamus commodo arcu turpis, id porta nisi sodales id. Fusce efficitur volutpat commodo.`,
              
    preview: 'Quisque nec dignissim massa, non iaculis neque. Nulla porta neque sed orci porta, id pulvinar erat hendrerit. Cras facilisis sem in nibh sodales, tincidunt fringilla quam euismod. Donec mattis ligula laoreet purus aliquet efficitur. Sed quis varius erat. Pellentesque vel nisl ut tellus aliquam vestibulum. Suspendisse augue sapien, sodales quis nisi vitae, fermentum bibendum nunc. Nam fringilla neque ac velit sodales semper. Phasellus laoreet odio odio, nec sagittis ante auctor non.'
  },
  {
    id: 4,
    title: 'The Quickest & Easiest Way To FLORIDA MAN',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus, libero vitae iaculis tempus, ante purus rhoncus neque, eget fringilla mauris neque quis massa. Pellentesque a vehicula nunc, non pulvinar ex. Nam sit amet mi non elit facilisis molestie sed et nisl. Pellentesque egestas in urna sed consectetur. Fusce tortor nibh, blandit vel magna gravida, sagittis ornare velit. Nunc tristique, est vitae dignissim accumsan, leo erat semper sem, in interdum magna eros quis mi. Duis vitae lacus neque. Aliquam condimentum vestibulum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in consequat enim.
              Sed vitae nisi et odio sollicitudin hendrerit. Donec eget mi eleifend, tincidunt sapien ac, consectetur metus. Duis et congue metus. Vestibulum hendrerit ac libero ut mattis. Suspendisse ac risus euismod, sodales libero sed, laoreet libero. In vitae justo sit amet ante eleifend ornare ac a nisi. Praesent vulputate tristique ante vitae viverra. Quisque purus mi, tempor vel est id, tincidunt tincidunt leo. Quisque lobortis, erat vitae accumsan interdum, ligula diam pellentesque arcu, sed lacinia ante urna ac neque. Vivamus commodo arcu turpis, id porta nisi sodales id. Fusce efficitur volutpat commodo.`,
              
    preview: 'Sed ultricies odio metus, at blandit ante volutpat ac. Proin vel felis imperdiet, ornare nulla vel, molestie urna. Fusce pretium hendrerit ipsum id lobortis. Nam viverra malesuada neque, eu elementum elit malesuada consequat. In et nisi dapibus, feugiat risus sed, pharetra libero. Aliquam erat volutpat. Cras eu nunc risus. Sed scelerisque ornare nunc eu auctor. Curabitur eu pretium quam, sit amet convallis tortor. Vestibulum euismod nisl elit, sit amet pulvinar nunc feugiat ac. In hac habitasse platea dictumst. Nunc enim lorem, molestie at diam ut, tempor pulvinar diam. Cras maximus augue ac est vulputate, vitae ultricies nisi ullamcorper.'
  }
]

export default createStore({
  state: {
    user: {
      authenticated: true
    },
    posts: initialPosts
  },
  mutations: {
    updateUser(state, status) {
      state.user.authenticated = status
    },
    deletePost(state, id) {
      console.log(id)
      state.posts = [...state.posts].filter(post => id !== post.id)
      console.log(state.posts)
    },
    updatePost(state, newPost) {
      state.posts = [...state.posts].map(statePost => {
        if (statePost.id === newPost.id) return newPost
        else return statePost
      })
    },
    createPost(state, post) {      
      const newPost = { id: Math.floor(Math.random() * 1000), ...post }      
      state.posts = [...state.posts, newPost]
    }
  },  
  modules: {
  },
  getters: {
    getPost: (state) => (id) => {
      const post = state.posts.filter(post => post.id === id)
      return post[0]      
    },
    getUser(state) {
      return state.user
    }
  }
})
