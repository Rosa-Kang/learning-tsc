/**
 * Java: Exception 이라는 object가 있음.
 * JavaScript : Error
 * 
 * Error(Exception) Handling: try -> catch -> finally
 */

function readFile(fileName:string):string {
    if (fileName === 'NNNNorm') {
        throw new Error(`file does not exist! ${fileName}`);
    }
    return 'file SUCCESS~!';
}

function closeFile(fileName: string) { }

function run() {
    const fileName = 'NNNNorm';
        try {
            console.log(readFile(fileName));
        } catch (error) {
            console.log(`ERROR CAUGHT!`);
        } finally {
            closeFile(fileName);
            console.log(`${fileName} CLOSED..`)
        }
    // closeFile(fileName);
    // console.log(`CLOSED!!`);
}
run();