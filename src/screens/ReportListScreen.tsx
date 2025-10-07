import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../utils/theme';
import CustomButton from '../components/Button';

const ReportListScreen = ({ navigation }: { navigation: any }) => {
  // Dados de exemplo
  const reports = [
    {
      id: '1',
      title: 'Relatório Mensal',
      date: '2025-10-01',
      status: 'approved',
      preview: 'Relatório de desempenho mensal...',
    },
    {
      id: '2',
      title: 'Auditoria Interna',
      date: '2025-09-28',
      status: 'pending',
      preview: 'Auditoria de processos internos...',
    },
    {
      id: '3',
      title: 'Inspeção de Segurança',
      date: '2025-09-25',
      status: 'draft',
      preview: 'Inspeção de segurança no local...',
    },
    {
      id: '4',
      title: 'Relatório Financeiro',
      date: '2025-09-20',
      status: 'approved',
      preview: 'Análise financeira trimestral...',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return '#28a745';
      case 'pending':
        return '#ffc107';
      case 'draft':
        return '#6c757d';
      default:
        return COLORS.primary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Aprovado';
      case 'pending':
        return 'Pendente';
      case 'draft':
        return 'Rascunho';
      default:
        return 'Desconhecido';
    }
  };

  const renderReportItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.reportItem}
      onPress={() => navigation.navigate('ViewReports')}
    >
      <View style={styles.reportItemHeader}>
        <Text style={styles.reportItemTitle}>{item.title}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{getStatusText(item.status)}</Text>
        </View>
      </View>
      <Text style={styles.reportItemDate}>{item.date}</Text>
      <Text style={styles.reportItemPreview}>{item.preview}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>RELATÓRIOS</Text>
          </View>
          
          <View style={styles.contentContainer}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Meus Relatórios</Text>
              <Text style={styles.headerSubtitle}>Total: {reports.length} relatórios</Text>
            </View>
            
            <FlatList
              data={reports}
              renderItem={renderReportItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.reportList}
              showsVerticalScrollIndicator={false}
            />
            
            <CustomButton title="📂 VER TODOS OS RELATÓRIOS" onPress={() => {}} />
            <CustomButton title="📤 EXPORTAR TODOS" onPress={() => {}} />
            <CustomButton title="VOLTAR" onPress={() => navigation.goBack()} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 30,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.text,
    opacity: 0.7,
  },
  reportList: {
    marginBottom: 20,
  },
  reportItem: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  reportItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reportItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  reportItemDate: {
    fontSize: 14,
    color: COLORS.text,
    opacity: 0.7,
    marginBottom: 5,
  },
  reportItemPreview: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
  button: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReportListScreen;