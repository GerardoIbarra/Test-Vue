<template>
    <div class="container text-center mt-5">
        <h2 class="text-center mt-5">
            Timer
        </h2>
        <div class="timer">{{ formattedTime }}</div>
        <div>
            <input type="number" v-model="inputSeconds" placeholder="Segundos" class="form-control" />

        </div>
        <div class="buttons">
            <button @click="startTimer" :disabled="isRunning || inputSeconds <= 0"
                class="btn btn-success rounded-0">Iniciar</button>
            <button @click="pauseTimer" :disabled="!isRunning" class="btn btn-warning rounded-0">Pausar</button>
            <button @click="resetTimer" class="btn btn-danger rounded-0">Limpiar</button>
        </div>
        <div class="alert alert-primary mt-10
" role="alert" v-if="finish" style="margin-top: 20px;">
            {{ msg_finish }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            duration: 0,
            timer: null,
            isRunning: false,
            inputSeconds: 0,
            msg_finish: '',
            finish: false
        };
    },
    computed: {
        formattedTime() {
            const hours = Math.floor(this.duration / 3600);
            const minutes = Math.floor((this.duration % 3600) / 60);
            const seconds = this.duration % 60;
            return `${this.formatTimeUnit(hours)}:${this.formatTimeUnit(minutes)}:${this.formatTimeUnit(seconds)}`;
        }
    },
    methods: {
        startTimer() {
            this.finish = false;
            if (!this.isRunning && this.inputSeconds > 0) {
                this.isRunning = true;
                this.duration = this.inputSeconds;
                this.timer = setInterval(() => {
                    this.duration--;
                    if (this.duration === 0) {
                        this.finish = true;
                        this.msg_finish = 'The time completed';
                        this.pauseTimer();

                    }
                }, 1000);
            }
        },
        pauseTimer() {
            if (this.isRunning) {
                this.isRunning = false;
                clearInterval(this.timer);
            }
        },
        resetTimer() {
            this.pauseTimer();
            this.duration = 0;
            this.inputSeconds = 0;
        },
        formatTimeUnit(unit) {
            return unit.toString().padStart(2, '0');
        }
    },
    beforeDestroy() {
        this.pauseTimer();
    }
};
</script>

<style>
.timer {
    font-size: 34px;
    margin-bottom: 10px;
}

.buttons button {
    margin-right: 10px;
    margin-top: 30px !important;
}
</style>
