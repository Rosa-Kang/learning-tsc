//TypeScript에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서 instanceOf를 사용할 수 X

class TimeoutError extends Error { }

class NetworkClient {
    tryConnect(): void {
        throw new Error(``);
    }
}

class UserService {
    constructor(private client : NetworkClient){}
    login() {
        this.client.tryConnect();
    }
}

class App {
    constructor(private userService: UserService){}
    run() {
        try {
            this.userService.login();
        } catch (error) {
            console.log(`Error happened`)
        } finally {
            console.log(`${this.userService}`)
        }
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();