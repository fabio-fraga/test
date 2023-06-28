const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM test_tasks');

    return tasks;
};

const createTask = async (task) => {
    const {title} = task;

    const dataUTC = new Date(Date.now()).toUTCString();

    const [createdTask] = await connection.execute(
        "INSERT INTO test_tasks (tsk_title, tsk_status, tsk_created_at) VALUES (?, ?, ?)",
        [title, "Pendente", dataUTC]
    );

    return createdTask;
};

module.exports = {
    getAll,
    createTask
};
