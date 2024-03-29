<template>
    <div class="ieltsTips">
        <div class="frame w-[100%] flex flex-row justify-center items-center h-[500px]" ref="container">
            <div class="Main_cirlce flex flex-col items-center justify-center w-[80%] h-[62%] rounded-[50%]">
                <span class="text-[red] font-black text-[55px]">IELTS</span>
                <span class="text-[white] font-black text-[55px]">TIPS</span>
            </div>
            <div class="writing absolute w-[70px] h-[70px] rounded-[50%] top-[90px] left-[60px]"
                @mousemove="moveShape($event, 'shape1')" ref="shape1"></div>
            <div class="yellowCircle absolute w-[50px] bg-[#FAFF00] h-[50px] rounded-[50%] top-[190px] left-[6px]"
                @mousemove="moveShape($event, 'shape2')" ref="shape2"></div>
            <div class="speaking absolute w-[30px] h-[30px] rounded-[50%] top-[260px] left-[60px]"></div>
            <div class="triangular top-[335px] left-[20px]"></div>
            <div class="bigGreen absolute bg-[#00FF29] w-[120px] h-[120px] top-[330px] left-[85px] rounded-[50%]"></div>
            <div class="purple absolute bg-[#AD00FF] w-[50px] h-[50px] top-[360px] right-[70px] rounded-[50%]"></div>
            <div class="reading absolute w-[40px] h-[40px] rounded-[50%] top-[280px] right-[50px]"></div>
            <div class="listening absolute w-[70px] h-[70px] rounded-[50%] top-[180px] right-[10px]"></div>
            <div class="square bg-[#FFB800] w-[50px] h-[50px] absolute top-[100px] right-[50px]"></div>
            <div class=" absolute redCircle bg-[red] rounded-[50%] w-[50px] h-[50px] right-[140px] top-[60px]"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            ListeningTips: [
                "In your listening test, use the example at the beginning of the first section to familiarise yourself with the voice, situation, and speakers.",
                "Keep listening until the recording stops, looking ONLY at the questions that relate to the part being played. If you look at the questions first and then listen to the record, you would be ready to extract information from the recording.",
                "There are often pauses in the recording between different sections. Use these to prepare for the next set of questions. If you do nothing during this time, you would find it hard to answer the questions if the speaking is fast.",
                "Answer questions in the order they appear on the question paper. Remember that they normally follow the order of the information in the recording. Even if there are some exceptions, following this strategy would help you greatly.",
                "At the end of the recording, you have some time to transfer your answers to the Answer Sheet. Check your grammar and spelling as you do so. Remember, a misspelt or grammatically incorrect answer would not carry any marks for you. ",
            ],
            ReadingTips: [
                "In the academic reading section, begin by going quickly through each passage to identify features such as the topic, style, the writer’s purpose and the intended readers. Highlight or underline important information like years. However, do not attempt another reading passage while you work on one. Complete the first passage and only then proceed to the next one.",
                "As you read, don’t try to understand the precise meaning of every word or phrase. You don’t have time, and those parts of the text might not be tested anyway. Once you skim through the whole passage, read 2-3 questions at a time and then find their answers from the reading passage.",
                "Reading tasks sometimes have an example answer. If this is the case, study it and decide why it is correct. But do not spend too much time on it.",
                "Some tasks require you to use words from the text in the answer; in others, you should use your own words. Check the instructions carefully. If you do not follow the instructions properly, there is a possibility that your answer would be wrong.",
                "The instructions may also include a word limit, e.g. Use no more than three words. Keep to this by avoiding unnecessary words in your answer. Violating the instruction would result in 'no-mark' for this question. ",
            ],
            WritingTips: [
                "In academic writing 1 and 2, do not use informal words or expressions. They would hurt your summary/report and essay. However, if you are taking GT IELTS and your letter is an informal one, you can use some informal words or expressions.",
                "Keep to the suggested timing: there are more marks possible for Task 2 than Task 1. So it is suggested that you should spend about 20 minutes on task 1 and the remaining 40 minutes for task 2.",
                "Organise and link your ideas and sentences appropriately, using a wide range of language and showing your ability (in Task 2) to discuss ideas and express opinions. It's always a good idea to give an example of an argument you present.",
                "If you write less than 150 words in Task 1 or less than 250 in Task 2 you will lose marks, but there is no maximum number of words for either.",
                "When you plan your essay, allow yourself some time. Also, you should spare 4-5 minutes to revise your work.",
            ],
            SpeakingTips: [
                "In the speaking test, don’t try to give a prepared speech, or talk about a different topic from the one you are asked to discuss. If you are not sure about the question, politely ask the examiner to repeat it.",
                "Always speak directly to the examiner, not to the recording equipment. Relax and feel easy while talking. Nervousness can hurt your natural performance.",
                "Whenever you reply ‘Yes’ or ‘No’ to a question, add more details to your answer. In each case, aim to explain at least one point. For instance, if the examiner asks 'Do you like reading?', you should give details on what type of books you read, how frequently and how much you enjoy it. Simply saying 'Yes' or 'No' is not a good answer at all.",
                "Remember that you are not being tested on your general knowledge but on your ability to communicate effectively. So if you sometimes need to imagine something and then describe it, feel free to do so.",
                "Organise and link your ideas and sentences appropriately, talking clearly at normal speed and using a wide range of structures and vocabulary. Do not try to mimic an accent. Speak naturally. ",
            ]
        };
    },

    mounted() {
        this.containerSize = {
            width: this.$refs.container.offsetWidth,
            height: this.$refs.container.offsetHeight
        };
    },

    methods: {
        moveShape(event, shapeClass) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const shape = this.$refs[shapeClass];
      const shapeX = shape.offsetLeft + shape.offsetWidth / 2;
      const shapeY = shape.offsetTop + shape.offsetHeight / 2;

      const dx = mouseX - shapeX;
      const dy = mouseY - shapeY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 100; // Adjust this value for elasticity strength

      if (distance < maxDistance) {
        const newX = shapeX + dx * 0.1;
        const newY = shapeY + dy * 0.1;
        shape.style.left = `${newX - shape.offsetWidth / 2}px`;
        shape.style.top = `${newY - shape.offsetHeight / 2}px`;
      }
    }
    },
};
</script>

<style scoped>
.Main_cirlce {
    background-image: url('../assets/background.png');
    background-size: cover;
    font-weight: 900;

}

.Main_cirlce span {
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
}

.square {
    transform: rotate(-16deg);
}

.writing {
    background-image: url('../assets/writing icon1.png');
    background-size: cover;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.writing:hover{
    transform: scale(1.1);
}
.listening {
    background-image: url('../assets/listening icon1.png');
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.reading {
    background-image: url('../assets/reading icon.png');
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.speaking {
    background-image: url('../assets/speaking icon.png');
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.yellowCircle {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.3s ease-in-out;
}
.yellowCircle:hover{
    transform: scale(1.1);
}

.triangular {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 45px solid #1400FF;
    transform: rotate(56.27deg);

}</style>