<template>
    <div class="container ">
        <h2 class="text-center mt-5">
            TodoList
        </h2>
        <!--Input-->
        <div class="d-flex">
            <input v-model="task" type="text" placeholder="Enter task" class="form-control" />
            <button @click="SubmitTask" class="btn btn-warning rounded-0">Submit</button>
        </div>
        <!--Table-->
        <table class="table table-hover mt-5">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col" class="text-center">Update</th>
                    <th scope="col" class="text-center">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in sortedTasks" :key="index">
                    <td>
                        <span :class="{ 'finish': task.status === 'Finished' }">
                            {{ task.name }}
                        </span>

                    </td>
                    <td>
                        <span @click="changeStatus(index)" class="pointer"
                            :class="{ 'text-danger': task.status === 'to-do', 'text-warning': task.status === 'in-progress', 'text-success': task.status === 'Finished' }">
                            {{ firstCharUpper(task.status) }}
                        </span>
                    </td>
                    <td style="width: 120px;">
                        <div class="text-center" @click="updateTask(index)">
                            <span class="material-icons-outlined">
                                update
                            </span>
                        </div>

                    </td>

                    <td>
                        <div class="text-center" @click="DeleteTask(index)">
                            <span class="material-icons-outlined">
                                delete
                            </span>
                        </div>

                    </td>
                </tr>

            </tbody>
        </table>


    </div>
</template>

<script>

export default {
    name: "Dashboard",

    data: function () {
        return {
            task: '',
            editedTask: null,
            StatusAvalieble: ["to-do", "in-progress", "Finished"],

            tasks: [

                {
                    name: 'Mimir',
                    status: 'Finished',
                },
                {
                    name: 'Take water',
                    status: 'in-progress',
                },
                {
                    name: 'Finish the project',
                    status: 'to-do'
                }, {
                    name: 'Take sun',
                    status: 'to-do'
                }
            ],
        }
    },
    methods: {
        SubmitTask() {
            if (this.task.length === 0) return;

            if (this.editedTask === null) {
                this.tasks.push(
                    {
                        name: this.task,
                        status: 'to-do'
                    }
                )
            } else {
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }
            this.task = '';
        },
        DeleteTask(index) {
            this.tasks.splice(index, 1)
        },
        updateTask(index) {
            this.task = this.tasks[index].name;

            this.editedTask = index;
        },
        changeStatus(index) {
            let newStatusindex = this.StatusAvalieble.indexOf(this.tasks[index].status);
            if (++newStatusindex > 2) newStatusindex = 0;
            this.tasks[index].status = this.StatusAvalieble[newStatusindex];
        },
        firstCharUpper(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    computed: {
        sortedTasks: function () {
            return this.tasks.sort((a, b) => {
                // Comparar los estados de las tareas
                const statusOrder = {
                    'to-do': 1,
                    'in progress': 2,
                    'Finished': 3
                };

                // Obtener los índices de orden para las tareas a y b
                const orderA = statusOrder[a.status] || Infinity;
                const orderB = statusOrder[b.status] || Infinity;

                // Comparar los índices de orden
                return orderA - orderB;
            });
        }
    }
}
</script>

<style scoped>
.pointer {
    cursor: pointer
}

.finish {
    text-decoration: line-through;
}
</style>
