const form = document.getElementById('chat-form');
console.log('hello');
const responseTextarea = document.getElementById('response');

const API_KEY = '';

form.addEventListener('submit', async (e) => {
    console.log('4722')
    const day = document.getElementById('days').value.trim();
    const cal = document.getElementById('cal').value.trim();
    const alg = document.getElementById('alg').value.trim();
    const xtra = document.getElementById('xtra').value.trim();
    e.preventDefault();

    if (day) {
        let prompt = `Generate me a shopping list for ${day} days and ${cal} calories per day. Make sure it is a list of things to buy, like dozen eggs or 1 lb broccoli. Generate some recipes too.`;
        if(alg)
        {
            let allergies = `Dietary restrictions: ${alg}`;
            prompt = prompt.concat(allergies);

        }
        if(xtra)
        {
            prompt=prompt.concat(xtra);
        }
        try {
            console.log("tri")
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [{ role: 'user', content: prompt }],
                    temperature: 1.0,
                    top_p: 0.7,
                    n: 1,
                    stream: false,
                    presence_penalty: 0,
                    frequency_penalty: 0,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                responseTextarea.value = data.choices[0].message.content;
                console.log('good')
            } else {
                responseTextarea.value = 'Error: Unable to process your request.';
                console.log('bad')
            }
        } catch (error) {
            console.error(error);
            console.log('bad2')
            responseTextarea.value = 'Error: Unable to process your request.';
        }
    }
});