import java.util.*;
public class countEntries {
    public static void doesItWork(int[] incoming){
        int[] wok = incoming;
        int len = incoming.length;

        int tmp;
        for(int i=0;i<len/2;i++){
            tmp=wok[i];
            wok[i] = wok[len-i-1];
            wok[len-i-1]=tmp;
        }
    }

    public static void main(String args[]){
        int[] incoming =new int[4];
        incoming[0]=1;
        incoming[1]=2;
        incoming[2]=3;
        incoming[3]=4;

        doesItWork(incoming);
    }
}