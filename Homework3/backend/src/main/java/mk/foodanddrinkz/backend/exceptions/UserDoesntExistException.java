package mk.foodanddrinkz.backend.exceptions;

public class UserDoesntExistException extends Exception{
    public UserDoesntExistException() {
        super("User doesn't exist");
    }
}
