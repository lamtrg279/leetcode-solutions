class Solution {
    public boolean isPalindrome(String s) {
        String input = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        if (input.length() == 0) {
            return true;
        }
        System.out.println(input);
        int left = 0, right = input.length()-1;
        while (left <= right) {
            if (!(input.charAt(left) == input.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}