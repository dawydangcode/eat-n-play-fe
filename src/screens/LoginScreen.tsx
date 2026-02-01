import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { COLORS, SIZES } from '@/constants/theme';
import Button from '@/components/Button';

const LoginScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSkip = () => {
    console.log('Skip login');
  };

  const handleLoginWithGoogle = () => {
    console.log('Login with Google');
  };

  const handleLoginWithEmail = () => {
    console.log('Login with Email');
  };

  const handleLoginWithFacebook = () => {
    console.log('Login with Facebook');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Bỏ qua</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Logo/Brand */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Eat n Play</Text>
        </View>

        {/* Slogan */}
        <Text style={styles.slogan}>Ăn ngon - Chơi vui - Sống trọn</Text>

        {/* Login Buttons */}
        <View style={styles.buttonsContainer}>
          {/* Login with Google */}
          <Button
            title="Tiếp tục với Google"
            onPress={handleLoginWithGoogle}
            variant="outline"
            icon={<Text style={styles.iconGoogle}>G</Text>}
          />

          {/* Login with Email */}
          <Button
            title="Tiếp tục với Email"
            onPress={handleLoginWithEmail}
            variant="outline"
            icon={<Text style={styles.iconEmail}>@</Text>}
            style={styles.buttonSpacing}
          />

          {/* Login with Facebook */}
          <Button
            title="Tiếp tục với Facebook"
            onPress={handleLoginWithFacebook}
            variant="outline"
            icon={<Text style={styles.iconFacebook}>f</Text>}
            style={styles.buttonSpacing}
          />
        </View>

        {/* Terms and Privacy */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            Bằng cách tiếp tục, bạn đồng ý với{'\n'}
            <Text style={styles.termsLink}>Điều khoản</Text>
            {' và '}
            <Text style={styles.termsLink}>Chính sách bảo mật</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  skipText: {
    fontSize: SIZES.md,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 56,
    color: COLORS.text,
    fontWeight: 'bold',
    letterSpacing: -2,
  },
  slogan: {
    fontSize: SIZES.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 60,
    letterSpacing: 0.5,
  },
  buttonsContainer: {
    width: '100%',
    marginBottom: 24,
  },
  buttonSpacing: {
    marginTop: 16,
  },
  iconGoogle: {
    fontSize: 20,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  iconEmail: {
    fontSize: 20,
    color: COLORS.text,
  },
  iconFacebook: {
    fontSize: 24,
    color: COLORS.text,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  termsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
    alignItems: 'center',
  },
  termsText: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: COLORS.primary,
  },
});

export default LoginScreen;
