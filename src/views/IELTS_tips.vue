<template>
    <div class="ieltsTips">
        <span class="text-[36px] my-[25px] font-black text-center flex flex-row justify-center w-[100%]">IELTS
            TIPS</span>
            <RouterLink to="/StudentPage">
            <div class="home cursor-pointer top-[35px] left-[25px] absolute"><img class="w-[40px]" src="../assets/home.png"
                    alt=""></div>
        </RouterLink>
        <div class="containers mt-[70px]">
            <RouterLink to="/listeningTips"><div class="listening relative w-[100%] flex flex-row justify-center">
                <div class="top">
                    <div
                        class="square h-[80px] flex flex-row justify-center items-center top-[-40px] w-[110px] bg-[#E86320] absolute">
                        <span class="text-[60px] text-[white]">01</span>
                    </div>
                    <div class="triangle top-[-40px]"></div>
                </div>
                <div class="main w-[75%] rounded-[70px] pt-[45px] pl-[15px] h-[225px] bg-[#F4AD15]">
                    <div class="left_side flex flex-col">
                        <span class="text-[#E86320] text-[25px]">LISTENING</span>
                        <span class="text-[white] text-[22px]">Record yourself and your lesson.
                            Remember your mistakes.
                        </span>
                    </div>
                </div>
            </div></RouterLink>
            <hr class="firstOne">
            <RouterLink to="/readingTips"><div class="reading relative w-[100%] mt-[80px] flex flex-row justify-center">
                <div class="top">
                    <div
                        class="square h-[80px] flex flex-row justify-center items-center top-[-40px] w-[110px] bg-[#23B7B5] absolute">
                        <span class="text-[60px] text-[white]">02</span>
                    </div>
                    <div class="triangle1 top-[-40px]"></div>
                </div>
                <div class="main w-[75%] rounded-[70px] pt-[45px] pl-[15px] h-[200px] bg-[#53BFC8]">
                    <div class="left_side flex flex-col">
                        <span class="text-[#007977] text-[25px]">READING</span>
                        <span class="text-[white] text-[22px]">Read a lot.
                            Perform test analysis.
                        </span>
                    </div>
                </div>
            </div></RouterLink>
            <div class="secondOne"></div>
            <RouterLink to="/writingTips"><div class="writing relative w-[100%] mt-[80px] flex flex-row justify-center">
                <div class="top">
                    <div
                        class="square h-[80px] flex flex-row justify-center items-center top-[-40px] w-[110px] bg-[#03647B] absolute">
                        <span class="text-[60px] text-[white]">03</span>
                    </div>
                    <div class="triangle2 top-[-40px]"></div>
                </div>
                <div class="main w-[75%] rounded-[70px] pt-[45px] pl-[15px] h-[225px] bg-[#178FAA]">
                    <div class="left_side flex flex-col">
                        <span class="text-[#03647B] text-[25px]">WRITING</span>
                        <span class="text-[white] text-[22px]">Work on your vocabulary.
                            Inculcate the words your learned in the sentences.
                        </span>
                    </div>
                </div>
            </div></RouterLink>
            <div class="thirdOne"></div>
            <RouterLink to="/speakingTips"><div class="speaking mt-[80px] relative w-[100%] flex flex-row justify-center">
                <div class="top">
                    <div
                        class="square h-[80px] flex flex-row justify-center items-center top-[-40px] w-[110px] bg-[#CD3735] absolute">
                        <span class="text-[60px] text-[white]">04</span>
                    </div>
                    <div class="triangle3 top-[-40px]"></div>
                </div>
                <div class="main w-[75%] rounded-[70px] pt-[45px] pl-[15px] h-[225px] bg-[#E9584A]">
                    <div class="left_side flex flex-col">
                        <span class="text-[#CD3735] text-[25px]">SPEAKING</span>
                        <span class="text-[white] text-[22px]">Converse in English.
                            Practice speaking in front of the mirror.
                        </span>
                    </div>
                </div>
            </div></RouterLink>
            <div class="fourthOne"></div>
        </div>
        <br>
        <br>
        <br>
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

    },

    methods: {

    },
};
</script>

<style scoped>
.triangle {
    width: 0;
    height: 0;
    left: 163px;
    border-top: 40px solid transparent;
    position: absolute;
    border-left: 80px solid #E86320;
    border-bottom: 40px solid transparent;
}
.triangle1 {
    width: 0;
    height: 0;
    left: 163px;
    border-top: 40px solid transparent;
    position: absolute;
    border-left: 80px solid #23B7B5;
    border-bottom: 40px solid transparent;
}
.triangle2 {
    width: 0;
    height: 0;
    left: 163px;
    border-top: 40px solid transparent;
    position: absolute;
    border-left: 80px solid #03647B;
    border-bottom: 40px solid transparent;
}
.triangle3 {
    width: 0;
    height: 0;
    left: 163px;
    border-top: 40px solid transparent;
    position: absolute;
    border-left: 80px solid #CD3735;
    border-bottom: 40px solid transparent;
}


.main {
    border-top-left-radius: 0px;
}

.square {
    border-top-left-radius: 40px;
}

.firstOne{
width: 2px;
position: absolute;
height: 65px;
left: 50%;
letter-spacing: 4px; 
border: dotted 1px #E86320;
}
.secondOne{
width: 2px;
position: absolute;
height: 65px;
left: 50%;
letter-spacing: 4px; 
border: dotted 1px #23B7B5;
}
.thirdOne{
width: 2px;
position: absolute;
height: 65px;
left: 50%;
letter-spacing: 4px; 
border: dotted 1px #03647B;
}
.fourthOne{
width: 2px;
position: absolute;
height: 65px;
left: 50%;
letter-spacing: 4px; 
border: dotted 1px #CD3735;
}

</style>